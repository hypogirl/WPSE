import re
from random import shuffle

lyrics = open("wicca_phase_lyrics_edited.txt","r").read()
lyrics = lyrics.replace("$","S")
word_list_init = [re.sub(r"\W","",word).upper() for word in lyrics.split() if len(word) == 5]
words = list(set([word for word in word_list_init if len(word) == 5]))
shuffle(words)
print(words,"\n",len(words))