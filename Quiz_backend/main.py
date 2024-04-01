from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from joblib import load
import numpy as np
from PIL import Image
import tensorflow as tf