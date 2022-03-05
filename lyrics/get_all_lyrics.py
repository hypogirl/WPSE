import lyricsgenius
from dotenv import dotenv_values

vars = dotenv_values('.env')
genius = lyricsgenius.Genius(vars['TOKEN'])
wicca_phase = genius.search_artist("Wicca Phase Springs Eternal", include_features=True)
lyrics = "\n\n\n".join([song.lyrics for song in wicca_phase.songs])
lyrics = lyrics.replace("Embed","")
lyrics = lyrics.replace('\u200b',"")
lyrics = lyrics.replace('\u2005',"")
lyrics = lyrics.replace('\u0435',"")
lyrics = lyrics.replace('\u205f',"")
lyrics = lyrics.replace('\u26d3',"")
open("wicca_phase_lyrics.txt","w").write(lyrics)