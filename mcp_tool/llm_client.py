
import os
from abc import ABC, abstractmethod
# Uncomment the following lines and install the libraries if you want to use real LLMs
# import google.generativeai as genai
# from openai import OpenAI

class LLMClient(ABC):
    def __init__(self, model_name: str):
        self.model_name = model_name

    @abstractmethod
    def generate_text(self, prompt: str, **kwargs) -> str:
        pass

class GeminiClient(LLMClient):
    def __init__(self, model_name: str = "gemini-pro"):
        super().__init__(model_name)
        api_key = os.getenv("GEMINI_API_KEY")
        if not api_key:
            raise ValueError("GEMINI_API_KEY environment variable not set.")
        genai.configure(api_key=api_key)
        self.model = genai.GenerativeModel(self.model_name)
        print(f"DEBUG: Initialized GeminiClient with model: {self.model_name}")

    def generate_text(self, prompt: str, **kwargs) -> str:
        try:
            response = self.model.generate_content(prompt, **kwargs)
            return response.text
        except Exception as e:
            raise RuntimeError(f"Gemini API call failed: {e}")

class OpenAIClient(LLMClient):
    def __init__(self, model_name: str = "gpt-3.5-turbo"):
        super().__init__(model_name)
        api_key = os.getenv("OPENAI_API_KEY")
        if not api_key:
            raise ValueError("OPENAI_API_KEY environment variable not set.")
        self.client = OpenAI(api_key=api_key)
        print(f"DEBUG: Initialized OpenAIClient with model: {self.model_name}")

    def generate_text(self, prompt: str, **kwargs) -> str:
        try:
            response = self.client.chat.completions.create(
                model=self.model_name,
                messages=[{"role": "user", "content": prompt}],
                **kwargs
            )
            return response.choices[0].message.content
        except Exception as e:
            raise RuntimeError(f"OpenAI API call failed: {e}")

def get_llm_client(provider: str, model_name: str) -> LLMClient:
    if provider.lower() == "gemini":
        return GeminiClient(model_name)
    elif provider.lower() == "openai":
        return OpenAIClient(model_name)
    else:
        raise ValueError(f"Unsupported LLM provider: {provider}")
