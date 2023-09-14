from tenacity import (retry, stop_after_attempt, wait_random_exponential)
from langchain.chains.summarize import load_summarize_chain
from langchain.docstore.document import Document
from langchain.prompts import PromptTemplate
from langchain.chat_models import ChatOpenAI
from transformers import pipeline
from dotenv import load_dotenv
from .prompts import *
import os

load_dotenv()
cls = pipeline('automatic-speech-recognition')


def getSummary(text):
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


def get_Text_from_file(filepath):
    res = cls(filepath)
    summarized = getSummary(res['text'])
    return summarized
