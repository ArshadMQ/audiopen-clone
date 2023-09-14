def map_prompt():
    return """
        Write a concise summary of the following:
        "{text}"
        CONCISE SUMMARY:
        """


def combine_prompt():
    return """
         High level overview of the document in 1-3 paragraphs:
        ```{text}```
        BULLET POINT SUMMARY:
        """
