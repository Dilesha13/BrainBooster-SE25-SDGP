from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from joblib import load
import numpy as np
from PIL import Image
import tensorflow as tf
from typing import List
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from PIL import Image
from io import BytesIO
from PyPDF2 import PdfReader
import nltk
import spacy
# other imports
import time
import torch
import numpy
from transformers import T5ForConditionalGeneration,T5Tokenizer
import spacy
import os
import json
from sense2vec import Sense2Vec
from collections import OrderedDict
import string
import pke
import nltk
from flashtext import KeywordProcessor
import random
import Levenshtein

def download_dependencies():
    # Download NLTK resources
    nltk.download('brown')
    nltk.download('stopwords')
    nltk.download('popular')
    nltk.download('universal_tagset')

    # Download spaCy resources
    spacy.cli.download('en')

download_dependencies()

from nltk.corpus import stopwords
from nltk.corpus import brown
# from similarity.normalized_levenshtein import NormalizedLevenshtein
from nltk.tokenize import sent_tokenize

# Call the function to download dependencies
# download_dependencies()

# from app import PythonPredictor 

# ============================== code for generating the result =============================== #
def MCQs_available(word,s2v):
    word = word.replace(" ", "_")
    sense = s2v.get_best_sense(word)
    if sense is not None:
        return True
    else:
        return False
    
def edits(word):
    "All edits that are one edit away from `word`."
    letters    = 'abcdefghijklmnopqrstuvwxyz '+string.punctuation
    splits     = [(word[:i], word[i:])    for i in range(len(word) + 1)]
    deletes    = [L + R[1:]               for L, R in splits if R]
    transposes = [L + R[1] + R[0] + R[2:] for L, R in splits if len(R)>1]
    replaces   = [L + c + R[1:]           for L, R in splits if R for c in letters]
    inserts    = [L + c + R               for L, R in splits for c in letters]
    return set(deletes + transposes + replaces + inserts)