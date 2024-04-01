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