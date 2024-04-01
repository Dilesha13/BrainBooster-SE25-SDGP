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