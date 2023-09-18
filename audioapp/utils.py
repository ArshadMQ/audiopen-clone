from langchain.chains.summarize import load_summarize_chain
from langchain.docstore.document import Document
from langchain.prompts import PromptTemplate
from langchain.chat_models import ChatOpenAI
import speech_recognition as sr
from dotenv import load_dotenv
from .prompts import *
import random
import openai
import os

load_dotenv()


def getText(audio_file):
    recognizer = sr.Recognizer()
    with sr.AudioFile(audio_file) as source:
        audio_data = recognizer.record(source)
    try:
        transcribed_text = recognizer.recognize_google(audio_data)
        return transcribed_text
    except sr.UnknownValueError:
        return ""
    except sr.RequestError as e:
        return ""


def getHuggingFace(text):
    doc = Document(page_content=text)
    map_prompt_template = PromptTemplate(template=map_prompt(), input_variables=["text"])
    combine_prompt_template = PromptTemplate(template=combine_prompt(), input_variables=["text"])
    summary_chain = load_summarize_chain(llm=ChatOpenAI(temperature=0, model_name=os.getenv("GPT_MODEL"),
                                                        request_timeout=1200,
                                                        openai_api_key=os.getenv("OPENAI_API_KEY")),
                                         chain_type='map_reduce',
                                         map_prompt=map_prompt_template,
                                         combine_prompt=combine_prompt_template)
    output_summary = summary_chain.run([doc])
    return output_summary


def getGPTSummary(input_text):
    response = openai.ChatCompletion.create(
        model=os.getenv("GPT_MODEL"),
        messages=[
            {"role": "system", "content": "You are a helpful assistant that summarizes text."},
            {"role": "user", "content": f"Summarize the following text:\n{input_text}"}
        ],
        max_tokens=int(os.getenv("TOKEN_LENGTH")),
        api_key=os.getenv("OPENAI_API_KEY")
    )
    summary_text = response.choices[0]["message"]['content']
    return summary_text


def get_Text_from_file(filepath):
    try:
        res = getText(filepath)
        random_value = random.random()
        summarized = getHuggingFace(res) if random_value < 0.5 else getGPTSummary(res)
        return summarized, res
    except Exception as e:
        return "I'm very sorry, but I can't assist with that", ""


def generateName():
    alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
                 "u", "v", "w", "x", "y", "z"]

    nameList = ''.join(random.choice(alphabets) for _ in range(6))
    return nameList
