import unittest
from questiongeneration import generate_questions_mcq

class TestQuestionGeneration(unittest.TestCase):
    def test_generate_questions_mcq(self):
        # Test the generate_questions_mcq function
        pass

class TestQuestionGeneration(unittest.TestCase):
    def test_generate_questions_mcq(self):
        # Test the generate_questions_mcq function

        # Load the pre-trained T5 model and tokenizer
        model_name = "t5-base"
        model = T5ForConditionalGeneration.from_pretrained(model_name)
        tokenizer = T5Tokenizer.from_pretrained(model_name)

        # Load the Sense2Vec model
        s2v = Sense2Vec()

        # Initialize the NLTK Levenshtein distance function
        normalized_levenshtein = NormalizedLevenshtein()

        # Load the input text
        input_text = "The Great Barrier Reef is the world's largest coral reef system composed of over 2,900 individual reefs and 900 islands stretching for over 2,300 kilometres over an area of approximately 344,400 square kilometres. The reef is located in the Coral Sea, off the coast of Queensland, Australia."
        