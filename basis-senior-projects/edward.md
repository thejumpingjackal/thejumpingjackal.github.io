---
title: Edward
layout: template
filename: edward.md
--- 

# Humans vs. AI: Can we tell the difference musically?

**Internal Advisor:** Jeffrey Winslow & Christian Martin
**External Advisor:** Rita Borden
**Internship Location:** Independent Research

### Abstract

With major advances in artificial intelligence, AI generated music is becoming increasingly difficult to distinguish from original human compositions, posing a threat to the livelihoods of composers across all genres of music. This project aims to answer three main questions: 1) Does increased knowledge of music theory facilitate the identification of AI music? 2) Can people tell the difference between AI music and manmade music? 3) Does AI music evoke weaker emotional responses in people compared to original compositions? I will be using ten sets of music from human composers from specific genres, paired with a composition of my own, and a composition of artificial intelligence, and participants will be asked to identify each composition. I will be working with my piano teacher, Dr. Borden, and my choir director, Dr. Martin, to pick out pieces and achieve a better understanding of the musical theory that applies to different genres and eras of music. I will be working with my former computer science teacher Dr. Winslow to use the MuseNet music model to generate pieces of music from specific eras. The following outcomes are expected: 1) Musical knowledge will facilitate the correct identification of AI music. 2) People will not be able to distinguish AI music from original compositions. 3) AI will provoke approximately the same emotional response in its compositions as manmade compositions can.

---

## Week 0 (2/21) – Humans Vs. AI: Can We Tell The Difference Musically?
Edward W - **February 21, 2024 10:31 am**

Hello everyone! My name is Edward, and for the next ten weeks, I will be focusing my senior project on a main question: Can people tell the difference between original and AI-generated compositions musically?

Before I get into that, a little bit about me. For most of my life, I have been involved in music, whether it be on the piano, cello, guitar, saxophone, or ukulele, and I was so excited to work on a project revolves around music, especially how that can tie into future technologies. Although I’m fairly new to the coding scene, I am really excited to work with neural networks to create music. Surprisingly, AI is very good at creating music, and with this project I really wanted to test if people could distinguish it from original, human compositions, especially since I’ve had a lot of trouble distinguishing the two despite having over 10 years of musical experience.

A little bit of an introduction to the project: with major advances in artificial intelligence, AI generated music is becoming increasingly difficult to distinguish from original human compositions, posing a threat to the livelihoods of composers across all genres of music. This project aims to answer three main questions:

1. Does increased knowledge of music theory facilitate the identification of AI music
2. Can people tell the difference between AI music and manmade music?
3. Does AI music evoke weaker emotional responses in people compared to original compositions?

I will be using ten sets of music from human composers from specific genres, paired with a composition of my own, and a composition of artificial intelligence, and participants will be asked to identify each composition.

I will be working with my piano teacher, Dr. B—–, and my choir director, Dr. Martin, to pick out pieces and achieve a better understanding of the musical theory that applies to different genres and eras of music. I will be working with my former computer science teacher Dr. Winslow to use the MuseNet music model to generate pieces of music from specific eras. The following outcomes are expected:

1. Musical knowledge will facilitate the correct identification of AI music.
2. People will not be able to distinguish AI music from original compositions.
3. AI will provoke approximately the same emotional response in its compositions as manmade compositions can.

There is definitely a lot more nuance to these questions, most of which I cover in my senior project proposal, the link to which I’ve attached below.

Senior Project Proposal: **SENIOR PROJECT PROPOSAL LINK**

Aside from this, I am very excited to be working on this project! Please let me know if you have any questions, comments, concerns, and queries, and I will be more than happy to answer them. Thanks for staying with me for my first blog post, and hopefully you’ll stick around for a couple more!

– Eddie 😛

**IMAGE HERE**

---

## Week 1 (2/28) – Picking Out Pieces
Edward W - **February 28, 2024 12:04 pm**

**This week’s goal:** Pick out all of the pieces that I plan to use in the resulting survey.

### A Few Setbacks First…

So… it turns out that the MuseNet neural network I was planning to use for my senior project is on hiatus indefinitely, and there is no official MuseNet neural network that has been released by OpenAI. The research for the neural network has been on pause since December 2022, but I didn’t realize this, so I was searching on GitHub for nearly an hour until I found a post saying the neural network was no longer accessible to the public. Although it does mean that I have to pivot to using another neural network, it doesn’t affect any of my progress this week, since my objective this week was to pick out pieces to use in my survey.

But currently, I am looking at Allegro Music Transformer, which is a neural network that functions similarly to MuseNet, but has all of its code accessible on asigalov61’s GitHub page. Allegro Music Transformer also uses Jupyter Notebook, which I am very new to, so it’s a bit of foreshadowing to how next week is going to go…

### Back To This Week…

This week was spent combing through piece after piece by composer after composer.  I think I’ve listened to almost a good eight hours’ worth of music in the past week, and this might constitute the most boring part of the project. The good news is that I have a set of ten pieces picked out, and although I can’t specify what pieces I will be using in the final survey, I *can* tell you what genres and arrangements I’ve picked!

* Baroque – solo organ, four-part fugue
* Classical – string quartet
* Romantic – solo piano
* Contemporary – solo piano
* Contemporary – solo cello
* Jazz – jazz quartet, sax solo
* World – vocals over lyre
* City Pop – pop band (vocals over synth, bass guitar, and drumset)
* Ambient – piano and synth
* Original Composition – piano and cello duet

I picked a lot of piano and cello pieces, mostly because that is what me and my piano teacher are familiar with, but I also tried to include other ensembles that I am less familiar with, like jazz quartets, pop bands, and organ.

Although I would have liked to include more music from the modern era, the problem with pop music is that… well, it’s popular! For any pop song I pick, there is a decent chance that one of the respondents might actually know the song, and it ends up ruining the point of the survey. Now that I have these pieces, I am going to have to transcribe them into MIDI files that can be processed through MuseScore, which will be coming up on Week 4.

Below is a picture of me listening to music! (Here, it’s Mozart’s *Ein musikalischer Spaß*.)

**IMAGE HERE** 

### Next Week’s Objective

Next week is the fun part! I’ll be figuring out how both Allegro Music Transformer and Jupyter Notebook work, and I’ll be starting to actually create music using neural networks. For now, the pieces that I found will give me a good baseline for what genres I should try to get the AI to compose in.

Thanks for sticking around, and hopefully I’ll see you in next week’s blog post!

– Eddie 😛

### Minor Edit (3-4-24)

I wanted to update this post, especially since I think Isabelle asked a very good question about what qualities I was looking for while I was choosing my pieces, and I wanted to take the opportunity to address it here since I should’ve but didn’t in this post last week.

I was looking for three major factors in all the pieces I was picking:

1. Recognizability – A piece is recognizable when I can give it to someone with a lower level of musical experience, and they can go, “Oh, it’s this genre” or “Oh, it’s from this musical era”, so it was very important that these pieces are representative of their genre or era.
2. Obscurity – A piece is obscure when it isn’t as well known in the musical community. Of course, I can never guarantee that absolutely no one has heard of a specific piece, but because of the sheer quantity of music many composers put out, there are many pieces that just never gained popularity. The last thing I would want to happen is me using a common piece like Für Elise or the Flight of the Bumblebee and have respondents to my survey be able to deduce which piece they mark as AI-generated using this sort of deduction.
3. Arrangement Commonality – I needed to pick pieces that use common ensembles. For example, if I used one of Liszt’s piano duets (of which he has only three), a listener could potentially tell that it’s Liszt not from the content of the music, but by which instruments are used, which defeats the point of the survey.

Here are some examples of the first factor, since it might not be completely clear how music from the Romantic era may not sound “Romantic” in style, etc.:

1. Ludwig van Beethoven’s Sonata in C-minor, No. 32, Mvt. II – Arietta – [youtu.be/WGg9cE-ceso?t=955](https://youtu.be/WGg9cE-ceso?t=955) – This section feels like it could fit in snugly with 1920s boogie-woogie, not the 1820s from whence it came!
2. Heinrich Biber’s Battalia à 10, Mvt. II – Die liederliche Gesellschaft von allerley Humor – [youtu.be/5YBOmgi-qSs?t=105](https://youtu.be/5YBOmgi-qSs?t=105) – The movement is very reminiscent of contemporary music, despite being from 1673, containing dissonances that would make Schönberg blush!
3. Franz Liszt’s Bagatelle sans tonalité, S. 216a – [youtu.be/yc_HjEa8k5k](https://youtu.be/yc_HjEa8k5k) – The whole piece is filled with atonality that is reminiscent of contemporary classical music, and in a way, Liszt cleverly predicted the direction that classical music would go in in the years following his death.

This time it has working links too!

I wanted to add this because I regret not adding into my original post, but I think it’s definitely important context for readers to know!

Thanks again to Isabelle for the question!

---

## Week 2 (3/6) – Generating AI Music
Edward W - **March 7, 2024 11:15 am**

This week’s goal: Generate the AI music that I am going to use in the survey.

### Allegro Music Transformer: How Does It Work?

If you read my last post, you’ll know that I had to pivot to Allegro Music Transformer since MuseNet is on an indefinite hiatus. Luckily, Allegro Music Transformer wasn’t terribly difficult to use, and I ended up getting some pretty good batches from the neural network. Since Jupyter Notebook, the program that Allegro Music Transformer runs in, is largely just a way to sequentially write and execute Python code, it didn’t end up being as much of a hurdle as I had anticipated either!

Although I definitely want to go into some of the results I got from the neural network, I want to first tell you a bit about how Allegro Music Transformer works, since it can definitely seem like black magic at times…

Allegro Music Transformer is a neural network that is trained on hundreds of thousands of MIDI samples from large databases all across the internet. Think of MIDI like a piano roll; it stores the pitch of every note, when the note should be played, how loud or soft the note is played, and what instrument plays the note. Allegro Music Transformer takes the MIDI files and trains itself to improve at composition through a feedback loop. The neural network generates a rough composition based off of the MIDI files, and an error correction algorithm looks at it and picks out problems with the compositions. It sends this back to the neural network, and the neural network generates a slightly better composition, which gets sent back to the error correction algorithm. In this way, the neural network is able to self-improve and develop a relatively good understanding of composition.

If you use Allegro Music Transformer, it will ask you for a seed MIDI. A seed basically gives the neural network a small example of what music you expect it to generate, and Allegro Music Transformer will try to extend the music based off of the seed MIDI.

First, Allegro Music Transformer tokenizes each note—basically transforming each note into something the neural network can process—and uses that data to create a composition based on the databases of MIDI files it was trained on. It spits out how it thinks the seed should be extended, and that is the output that you get from the neural network.

### Results

Although I can’t share the resulting WAV files that I will use in my survey, I did make sure to generate some music based off of compositions that I’m not planning to use in my survey, which I can share with you below!

#### Bach, Johann Sebastian – Fugue 1 In C Major From WTC I, BWV 846

<table style="border-collapse: collapse;">
	<tbody>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Seed</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/bach/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/bach/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Batch 1</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/bach/batch-1.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Batch 2</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/bach/batch-2.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
	</tbody>
</table>

#### Mozart, Wolfgang Amadeus – *Eine Kleine Nachtmusik*, K. 525

<table style="border-collapse: collapse;">
	<tbody>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Seed</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/mozart/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/mozart/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Batch 1</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/mozart/batch-1.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Batch 2</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/mozart/batch-2.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
	</tbody>
</table>

#### Chopin, Fryderyk – Waltz No. 19 In A Minor, Op. Posth. B. 150

<table style="border-collapse: collapse;">
	<tbody>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Seed</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/chopin/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/chopin/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Batch 1</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/chopin/batch-1.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Batch 2</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/chopin/batch-2.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
	</tbody>
</table>

#### Prokofiev, Sergei – *Suggestion Diabolique* From 4 Pieces For Piano, Op. 4, No. 4

<table style="border-collapse: collapse;">
	<tbody>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Seed</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/prokofiev/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/prokofiev/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Batch 1</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/prokofiev/batch-1.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Batch 2</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/prokofiev/batch-2.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
	</tbody>
</table>

#### W., Edward – Composition For Tenor Sax, Bass Guitar, Piano, And Drumset

<table style="border-collapse: collapse;">
	<tbody>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Seed</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/w/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/w/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Batch 1</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/w/batch-1.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Batch 2</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/w/batch-2.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
	</tbody>
</table>
 

Below is a photograph of me editing some of the MIDI files in MuseScore!

**IMAGE HERE**

### Finally, A Mini Experiment…

Last week, Macabe W. actually asked a question that really intrigued me. I’ll put it down below if you need a refresher:

> Since you haven’t started working with the AI music models yet, do you expect that through this project you’ll be able to tell apart human and AI made music? Or do you think you will have as hard a time telling them apart as the people taking your survey?

It definitely made me realize that I won’t be able to test myself since all of the music I’m generating has to go by me first so I can see if it can work in the survey. So, I decided to ask my sister to generate some WAV files with the neural network to test me.

In total, I tested 11 original compositions with 11 AI compositions, and I was only able to get 7 out of 11 of the compositions correct. Here, p represents the true proportion of compositions that I would guess correctly if I were to listen to many of these compositions. From purely guessing, we would expect a result of around 0.5, or about half of the compositions I listened to. I got a score of 7/11 = 0.636, which, although it’s better than 0.5, is not statistically significant enough to say that I can definitively tell original compositions from AI compositions.

Here’s some of the statistics: (n = 11, p₀ = 0.5, p̂ = 0.636, P(p̂ ≥ 7) = 0.2744)

So, I’m not much better than flipping a coin and guessing…

It does seem to back up my second hypothesis: people won’t be able to distinguish AI music from original compositions. I’ll definitely get more of chance to look into this hypothesis once the survey is up and running.

### Next Week’s Objective

Next week, I will be focusing on my own compositions that I will be using for the survey. I will be going about in a similar process to the neural network; I’ll get a seed composition, and I’ll compose what I think should follow. From there, the survey will be fairly close to ready!

Thanks again for sticking around, and hopefully I’ll see you in next week’s blog post!

– Eddie 😛

---

## Week 3 (3/20) – Composing My Own Music
Edward W - **March 21, 2024 1:53 am**

**This week’s goal:** Compose all of my own music that I plan to use in the survey.

Hey, everybody! If you weren’t already aware, I took off last week for spring break, so in one of the upcoming weeks, I’ll try to squeeze in two posts instead of one, but I’ll still treat each one as its own separate week.

### My Own Compositions…

I spent this week composing music, and I have to say… it’s definitely not my strong suit. I think this mostly stemmed from the fact that I had to take a seed and extend it, similarly to the AI. Usually, I am pretty comfortable composing my own original pieces, but it was definitely harder for me to replicate a style convincingly, especially when my compositional skill is nowhere near that of Beethoven or Mozart. So I wanted to preface what you’re about to hear with… I tried my best!

Needless to say, I can’t show you the actual pieces that I will be using in my actual survey, but I prepared some example pieces for you to enjoy! Because I have all the audio files for these pieces (the original ending to the seed, the AI-generated ending, and my own ending), you can have a sort of mini survey before the actual survey comes out (which I will be working on in Week 5).

For each piece, I give you the original seed that was given to the AI to generate and to me to compose, and an extra audio file that demonstrates how the seeds were continued by the composers who wrote them. I have randomized the original continuation, my composition, and the AI composition’s order like how I am planning to with the survey. Feel free to try and have a guess at it, and once you’re done, you can highlight the white space in front of the audio files to see how you did!

Also, feel free to let me know how the mini survey goes for you with the comments! I could always use more data to inform my hypotheses! Along with each composer, I’ll also go over some bumps that I ran into while composing and give a bit more insight into the pieces.

Without further ado…

### A Mini Survey!

#### Bach, Johann Sebastian – Fugue 1 In C Major From WTC I, BWV 846

<table style="border-collapse: collapse;">
	<tbody>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Seed</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/bach/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">&gt; <span style="color: #ffffff;">AI Batch #2</span></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/bach/batch-2.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">&gt; <span style="color: #ffffff;">AI Batch #1</span></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/bach/batch-1.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">&gt; <span style="color: #ffffff;">Original Ending</span></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/bach/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">&gt; <span style="color: #ffffff;">My Continuation</span></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/bach/p-seedcont.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
	</tbody>
</table>

Out of all of the compositions, this one was by far the hardest for me. Bach was one of, if not THE best fugal writer of his time, so trying to write a continuation to this piece was like learning how to drive from the backseat of a car. This was made worse by the fact that fugal writing consists of interlocking voices; each voice has its own independent melody, but they come together to form a complete composition. Each melody I wrote would sound fine on its own, but when it came together with the rest, it was a cacophonous mess, so I ended up spending hours adjusting each melody so that it could sound good with the whole.

#### Mozart, Wolfgang Amadeus – *Eine Kleine Nachtmusik*, K. 525

<table style="border-collapse: collapse;">
	<tbody>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Seed</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/mozart/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">&gt; <span style="color: #ffffff;">AI Batch #1</span></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/mozart/batch-1.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">&gt; <span style="color: #ffffff;">My Continuation</span></td>
			<td style="border: none;"><audio src="https://thejumpingjackal.github.io/senior-project/mozart/p-seedcont.wav" controls="controls">Your browser does not support the audio element.</audio></td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">&gt; <span style="color: #ffffff;">Original Ending</span></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/mozart/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">&gt; <span style="color: #ffffff;">AI Batch #2</span></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/mozart/batch-2.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
	</tbody>
</table>

This one was also a pretty big challenge for me. I am pretty unfamiliar with string quartet composition, so making the different instruments blend well with each other was a pretty large hill to climb over. Since Eine kleine Nachtmusik is so popular, I think you’ll probably be able to tell which one was Mozart’s continuation, but try and see if you can tell which two are the AI’s and which one’s mine!

#### Chopin, Fryderyk – Waltz No. 19 In A Minor, Op. Posth. B. 150

<table style="border-collapse: collapse;">
	<tbody>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Seed</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/chopin/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">&gt; <span style="color: #ffffff;">AI Batch #2</span></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/chopin/batch-2.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">&gt; <span style="color: #ffffff;">Original Ending</span></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/chopin/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">&gt; <span style="color: #ffffff;">AI Batch #1</span></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/chopin/batch-1.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">&gt; <span style="color: #ffffff;">My Continuation</span></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/chopin/p-seedcont.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
	</tbody>
</table>

This one was by far the easiest to compose for. I am fairly familiar with Chopin’s work, especially his waltzes, so I think I was going into this one with more of an idea of what I could do to emulate the Romantic style that Chopin composed in.

#### Prokofiev, Sergei – *Suggestion Diabolique* From 4 Pieces For Piano, Op. 4, No. 4

<table style="border-collapse: collapse;">
	<tbody>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Seed</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/prokofiev/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">&gt; <span style="color: #ffffff;">AI Batch #2</span></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/prokofiev/batch-2.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">&gt; <span style="color: #ffffff;">My Continuation</span></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/prokofiev/p-seedcont.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">&gt; <span style="color: #ffffff;">AI Batch #1</span></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/prokofiev/batch-1.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">&gt; <span style="color: #ffffff;">Original Ending</span></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/prokofiev/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
	</tbody>
</table>

Being a Contemporary composer, Prokofiev has a pretty distinct musical style that I think both the AI and I had trouble replicating. I was very fixated on the chromatic motif that you hear at the beginning, as you’ll hear that throughout my composition. One other major problem I had was that I was using a lot of diminished chords and minor ninths, both of which are dissonant, to replicate Prokofiev’s sound, but Prokofiev seems to weave in consonance and dissonance throughout his pieces, which was really difficult for me to replicate, especially since I rarely compose in a Contemporary style.

#### W., Edward – Composition For Tenor Sax, Bass Guitar, Piano, And Drumset

<table style="border-collapse: collapse;">
	<tbody>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Seed</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/w/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">&gt; <span style="color: #ffffff;">My Continuation</span></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/w/p-seedcont.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">&gt; <span style="color: #ffffff;">AI Batch #1</span></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/w/batch-1.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">&gt; <span style="color: #ffffff;">Original Ending</span></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/w/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">&gt; <span style="color: #ffffff;">AI Batch #2</span></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/w/batch-2.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
	</tbody>
</table>

This one was also an easier piece for me to compose off of, since I composed it myself! I think the main issue I had with this piece was that I have only a little experience with saxophone and jazzy writing, so writing a sax solo over the main chords was actually kind of difficult, but I really like the end result!

### In Conclusion…

I thought that this week would be more of an easy week, but I ended up spending a lot more time on these compositions than I am willing to admit. Composition is no joke, and this week gave me a lot more insight into how layered and detailed musical composition can be, even when it might sound pretty simple.

As always, below is a photo of me composing! (Or at least, trying to…)

**IMAGE HERE**

### Next Week’s Objective

Next week, I will be spending time transcribing all of my results through MuseScore, which is the sound font that I am planning to use for my final survey. This way, respondents to my survey won’t be able to distinguish AI and original compositions through different instrument sounds, because a lot of the time, different instruments sound different and render different in an audio file.

Thanks again for all the support, and I hope you stick around for the next one!

– Eddie 😛

---

## Week 4 (3/27) – Converting All The Music
Edward W - **March 29, 2024 9:16 am**

**This week’s goal:** Convert all of the music I plan to use for my survey into the same sound font.

Apologies for how late my blog post was this week! I greatly underestimated the amount of time I’d need to transcribe all my pieces, so this blog post is much later than I would have hoped. Nevertheless, I hope you enjoy what this week has in store, especially as the first half of the project slowly draws to a close.

### So, What Is A Sound Font?

I’ve touched a lot on sound fonts throughout my project, so I think it’s very important that I elaborate on what they are and how I am planning on using them in my project.

Just like how a font is used for text that you see, a sound font is used for sound that you hear, more specifically music.  It is a collection of samplings from multiple different instruments that are used for playing back MIDI files. Just like how two of the same instrument won’t sound the same because there are differences in the quality, construction, and player between two instruments, sound fonts sound different from other sound fonts because of the differences in the quality of the equipment used to record samples of the instruments, the specific sound of the instruments used for the sampling, and even what settings a sound font is created for (more of a solo instrumental setting? or an ensemble?).

It is very important that for the survey, I use the same sound font between different samples, not because it necessarily “gives away” the AI generated music, but because having different sound fonts in the survey adds unnecessary noise to the final results I get from my survey, and it’s harder to draw a good conclusion from the data I collect.

Allegro Music Transformer, the neural network I used for my song generation, uses the FluidSynth sound font, whereas the sound font I’m using for my seeds and original compositions are all in MuseScore’s MS Basic sound font, so it can end up being easier to tell the two apart through their sound fonts. In the end, I settled on converting everything to MuseScore’s Muse Sounds sound font, just because I think it sounds better and will be more consistent for the survey.

Below, I wanted to add some audio samples, because hearing the difference between the sound fonts is always better than reading my descriptions of them.

<table>
	<thead>
		<tr>
			<td rowspan="2"> </td>
			<td> </td>
			<td style="text-align: center; padding-right: 20px;"><b>Sound Font</b></td>
			<td> </td>
		</tr>
		<tr>
			<td style="text-align: center; padding-right: 20px;">FluidSynth</td>
			<td style="text-align: center; padding-right: 20px;">MS Basic</td>
			<td style="text-align: center; padding-right: 20px;">Muse Sounds</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="padding: 0px 10px 0px 20px;">Bach</td>
			<td style="padding: 0px 10px;">
				<audio src="https://thejumpingjackal.github.io/senior-project/bach/ogend-fs.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="padding: 0px 10px;">
				<audio src="https://thejumpingjackal.github.io/senior-project/bach/ogend-ms.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="padding: 0px 10px; background-color: #eee;">
				<audio src="https://thejumpingjackal.github.io/senior-project/bach/ogend-msms.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="padding: 0px 10px 0px 20px;">Mozart</td>
			<td style="padding: 0px 10px;">
				<audio src="https://thejumpingjackal.github.io/senior-project/mozart/ogend-fs.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="padding: 0px 10px; background-color: #eee;">
				<audio src="https://thejumpingjackal.github.io/senior-project/mozart/ogend-ms.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="padding: 0px 10px;">
				<audio src="https://thejumpingjackal.github.io/senior-project/mozart/ogend-msms.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="padding: 0px 10px 0px 20px;">Chopin</td>
			<td style="padding: 0px 10px;">
				<audio src="https://thejumpingjackal.github.io/senior-project/chopin/ogend-fs.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="padding: 0px 10px;">
				<audio src="https://thejumpingjackal.github.io/senior-project/chopin/ogend-ms.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="padding: 0px 10px; background-color: #eee;">
				<audio src="https://thejumpingjackal.github.io/senior-project/chopin/ogend-msms.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="padding: 0px 10px 0px 20px;">Prokofiev</td>
			<td style="padding: 0px 10px;">
				<audio src="https://thejumpingjackal.github.io/senior-project/prokofiev/ogend-fs.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="padding: 0px 10px;">
				<audio src="https://thejumpingjackal.github.io/senior-project/prokofiev/ogend-ms.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="padding: 0px 10px; background-color: #eee;">
				<audio src="https://thejumpingjackal.github.io/senior-project/prokofiev/ogend-msms.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
		<tr>
			<td style="padding: 0px 10px 0px 20px;">Me</td>
			<td style="padding: 0px 10px;">
				<audio src="https://thejumpingjackal.github.io/senior-project/w/ogend-fs.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="padding: 0px 10px; background-color: #eee;">
				<audio src="https://thejumpingjackal.github.io/senior-project/w/ogend-ms.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="padding: 0px 10px;">
				<audio src="https://thejumpingjackal.github.io/senior-project/w/ogend-msms.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
		</tr>
	</tbody>
</table>

In grey, I’ve highlighted the sound fonts I used for each audio clip. You can see that Muse Sounds performs much better for solo compositions; the piano sound that it creates feels much richer and less robotic compared to the MS Basic music. But for ensembles, MS Basic creates a better balance between all the instruments compared to Muse Sounds, even if it sounds a bit robotic. Either way, I am using a mix of the two in the final survey, with Muse Sounds for solo pieces and MS Basic for ensemble pieces.

### More About What I Did This Week…

I spent most of this week taking the resulting WAV files that Allegro Music Transformer generated and feeding them through MuseScore 4’s sound fonts. My only issue with Allegro Music Transformer is that there is no option for the neural network to output MIDI files (which MuseScore accepts in its UI), so I have to painstakingly take a WAV file and a corresponding PNG of the music and parse together the final piece into a MIDI file that MuseScore can use. I’ve already attached the WAV files that Allegro Music Transformer generates (they’re in the FluidSynth column of the audio file grid up above), so here are examples of the PNGs that I have to use to transcribe the final pieces:

<table style="border-collapse: collapse;">
	<tbody>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Bach</td>
			<td style="border: none;">
				<div class="wp-block-image">
					<img class="alignnone wp-image-9690" src="https://thejumpingjackal.github.io/senior-project/bach/ogend-fs.png" alt="Bach PNG" />
				</div>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Mozart</td>
			<td style="border: none;">
				<div class="wp-block-image">
					<img class="alignnone wp-image-9690" src="https://thejumpingjackal.github.io/senior-project/mozart/ogend-fs.png" alt="Bach PNG" />
				</div>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Chopin</td>
			<td style="border: none;">
				<div class="wp-block-image">
					<img class="alignnone wp-image-9690" src="https://thejumpingjackal.github.io/senior-project/chopin/ogend-fs.png" alt="Bach PNG"/>
				</div>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Prokofiev</td>
			<td style="border: none;">
				<div class="wp-block-image">
					<img class="alignnone wp-image-9690" src="https://thejumpingjackal.github.io/senior-project/prokofiev/ogend-fs.png" alt="Bach PNG"/>
				</div>
			</td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Me</td>
			<td style="border: none;">
				<div class="wp-block-image">
					<img class="alignnone wp-image-9690" src="https://thejumpingjackal.github.io/senior-project/w/ogend-fs.png" alt="Bach PNG"/>
				</div>
			</td>
		</tr>
	</tbody>
</table>

The transcription process is painstakingly slow, especially because I have to write down the music the AI generates based on what I hear and see, which ends up being a bunch of guesswork with all the dots in the PNGs. In the end, I was very happy with the results, but it ended up being a lot more work than I anticipated for this week.

### Next Week’s Objective

Next week, I’ll be working on the survey in Google Forms. I am so excited to be able to finally get the survey out, but there will definitely be some hurdles, especially since it’s difficult for me to import audio files into Google Forms and use them as answers. I’m considering making the actual survey in Google Forms so that it has no audio files, but it links to a website on GitHub that contains all the audio files. It’s still in the works, so you’ll get to see the updates next week!

As always, thank you for your supports, and I’ll see you in the next one!

– Eddie 😛

---

## Week 5 (4/3) – Major Setback
Edward W - **April 4, 2024 11:16 pm**

**This week’s original goal:** Build up my final survey and opening it to respondents.

### So, Where’s The Survey?

I had originally planned to get my final survey up and running by tomorrow (April 5th), but as of now, I don’t think it’s feasible. It has been a big hassle trying to figure out how to incorporate audio files into a survey, and I ended up having to completely scrap my ideas of using Google Forms and Survey Monkey because they don’t support audio files to be used as answers.

Ultimately, I had to resort to coding up my own survey with HTML. Although this definitely gave me more control over how the form is set up to work, it also meant hours of painstaking coding and a plethora of errors that needed to be corrected. Even worse, it would be even harder to implement features that are built into Google Forms and Survey Monkey, such as preventing a person from responding more than once to the survey, or randomizing the answers’ and questions’ orders, or even making the survey have a clean design.

Although I’ve put a ton of effort into trying to churn out this survey within this week, I don’t think it’s feasible for the survey to be released to the public just yet. There are still so many potential problems that I can think of:

1. I haven’t tested the survey within a small test group. It would be an absolute disaster for me to roll out this survey as it is now, and with the potential of the form failing in ways I might not be able to anticipate, I am very hesitant to even call the survey “usable”.
2. I’m not sure how I can deal with one person submitting multiple responses. I want to prevent as much error as possible in my data, but I haven’t found a good way to effectively stop double respondents. (Not that I think any of you would do that to me 👀)
3. I’m still receiving feedback for my survey. To rush the rollout of this survey by tomorrow would mean I end up throwing away valuable feedback from my internal advisors that I believe the survey needs to be able to function well. I’ll definitely still need the time to incorporate all of this.

In the end, I want the BEST possible product, not a hastily made one, and although it definitely hurts me to be straying from my original schedule, it would hurt me even more to choose quickness over quality.

In reflection, I think I was stretching myself too thin this week, trying to accomplish a hefty task that I had originally thought to be easy. We’ll see how the survey testing and feedback cycle goes, and with luck, I’ll have my survey out early sometime next week.

Even with this setback, I’m not one to leave you completely image-less this week, so here is a picture of some of the form coding that I have been doing:

**IMAGE HERE**

### Next Week’s Objective

Next week, I’ll be sorting out all the issues regarding my survey that I’ve listed here. Let’s hope it goes smoothly, and with hard work (and a little bit of luck), I’ll be able to have the survey out sometime early next week.

Thank you all again for sticking around, and I hope to see you in the next one!

– Eddie 😛

---

## Week 6 (4/10) – Final Survey
Edward W - **April 11, 2024 2:33 am**

**This week’s goal:** Finishing my survey and sending it out.

### The Survey Is Finally Here!

120 hours of work over 6 weeks, countless sleepless nights, and enough caffeine to take out a large elephant have finally culminated in my long-awaited survey. Although it’s a week late, I think I am really happy with the final result. Now, I’ll be moving onto the data collection part of my project, so if you’re reading this, I highly encourage you to participate in my survey! Below is the link:

**Senior Project Survey:** https://thejumpingjackal.github.io/senior-project/survey/

If you want to know more about some problems I had with my survey this week, I’ll be going into detail about some of the challenges I faced while building up the survey in this blog post.

### Problem #1: Many Form Services Aren’t Very Compatible With Audio Files.

Originally, I had wanted to use Google Forms for my survey, especially since it handles data collection really well, but unfortunately, it doesn’t support audio files within its forms, which is kind of important for my project. Even with other form services like Survey Monkey or Microsoft Forms, there wasn’t any support for audio files.

In the end, this restriction ended up forcing me to code my own survey as a form in HTML, which is the coding language that is used to create websites. Although coding in HTML would allow me more freedom with my survey—such as adding audio files to be used in both the questions asked and the multiple-choice answers—it also meant that I’d have to code up a form from scratch.

Although I can code relatively well in HTML, I’d only ever used it for building websites up until this point and not for building up forms, so working on this survey was like relearning how to code in HTML for a completely different purpose.

### Problem #2: GitHub Pages Are Static Only.

If a page is “static”, it basically means that the displayed HTML code is stored on a server and recalled every time someone loads the site. Because the code is only stored on the server, the page is unchanging no matter what browser or device loads it.

However, for a HTML form, the page needs to be “dynamic”, meaning that the page can change based on user inputs. When you click the “submit” button on a form, the page sends your response back to the main server, and the server sends a reply to let the page know that the response was recorded and saved to a database. With a static page, this is impossible, since the server only sends out the page to be displayed, and then there is no back-and-forth between the server and the page.

Since I’m hosting my survey on GitHub pages, which only allows static pages on their website, I had to find another way to implement the survey within the confines of these restrictions.

One workaround that I’ve found is using a third-party server to handle form submissions, like FabForm. Instead of sending a response directly to the server, my survey instead redirects to FabForm using a URL like the one below:

https://**fabform.io/f/**xxxxxxx?**x=abc&y=def&z=ghi**

* **https://** – HTTPS encryption protocol
* **fabform.io/f/** – FabForm processing site
* **xxxxxxx** – FabForm form code; this is what links FabForm’s servers to my form
* **?x=abc&y=def&z=ghi** – Query parameters; my survey will store all of the information submitted in a survey response into these parameters, which are sent to the FabForm servers once the page loads. The query begins with the question mark (?), and the parameters are separated with ampersands (&). For example, some parameters for my survey would be **?composition_experience=5&instrument_experience=8&etc=…**.

I’ve done some testing with this workaround, and it seems to work… good enough? The form can be a bit slow sometimes, but so far, I haven’t run into any major bugs or issues. If it ain’t broke, don’t fix it, I guess.

### Problem #3: I Wasn’t Particularly Sure How I Should Randomize The Survey.

With my survey, I had trouble randomizing the question order and the order of the answers within those questions. It took me a while to figure out how to change the order of the questions and answers, especially when, a lot of the time, the HTML for a site is set in stone.

In the end, I settled on this method:

1. While the page is loading, there is a JavaScript method that generates the question order.
2. Another JavaScript method takes the question order and places one question after the other based on predetermined HTML code. This is sort of like linking together train cars. You have to link the train cars (questions) one after another, but it doesn’t matter too much what the order in which they are linked in is since it all ends up going to the same destination at the end of the day. This way, the survey could be randomized and joined together to be sent off to respondents.
3. The page finally loads in.

I am really glad I came up with this idea early; otherwise, I would have had to work out the random order in some other way and spend even more time coding in JavaScript, which is a programming language that I am not very familiar with.

As always, here is a photo! The photo below is what the survey looked like when I was around 80% done.

**IMAGE HERE**

### Conclusions And Acknowledgements

This week has given me a ton more experience with the website programming language trifecta (HTML, CSS, and JS), and it’s been beyond helpful in allowing me to understand more about web and survey design.

Special thanks to Kei S. and Sophia G. for testing out my survey for holes that I overlooked.

A very special thanks to Dr. Winslow and Dr. Martin as well for revising my survey, giving me feedback, and helping me figure out how I want to end up analyzing the data that I get using statistical methods. Without their help, this survey would likely still be under construction, so I’m glad to have had their support, especially over the past two weeks.

### Next Week’s Objective

Next week, I am planning to focus on a sort of “mini project” involving the AI. I am planning to spend the remaining weeks generating a piano AI piece with a length of at least 5 minutes that I could potentially perform for my senior project presentation. The idea is still in the works, but I’m hoping it will come to fruition in the next month.

Thank you all again for your support! Remember to please take the survey if you can, and I hope to see you at my next blog post!

– Eddie 😛

---

## Week 7 (4/17) – Start Final Product
Edward W - **April 19, 2024 1:30 am**

**This week’s goal:** Finishing a longer AI generated piece for my final product.

**My survey:** https://thejumpingjackal.github.io/senior-project/survey/

Thank you to everyone who has taken the survey so far! If you haven’t taken the survey yet, do it, do it, do it!

### Allegro Music Transformer And Long Compositions

This week, I was spending my time using Allegro Music Transformer to create a longer form composition. Unfortunately, not all of the resulting piece is AI, since Allegro Music Transformer has two main limitations: 1) it requires a seed to compose from, and 2) the neural network prevents me from generating more than 1023 tokens. I’ll dive a little bit into what these two things mean.

#### Limitation #1: Allegro Music Transformer Needs A Seed To Compose Off Of.

If you have already read my past blog posts, you’ll know that Allegro Music Transformer takes a small clip of music and extends it using the data stored in its musical database. Because of this, some parts of the music had to be created by me in order to give the neural network something to latch onto to continue generating music.

#### Limitation #2: Allegro Music Transformer Can’t Generate More Than 1023 Tokens.

I’ve only touched on what a token is briefly in previous post, but here I’ll go a bit more in depth. For AI, a “token” is a fundamental unit of data that the neural network can process to create an output. For Allegro Music Transformer specifically, it tracks three main points in a seed composition for tokenization: notes, melodies, and chords.

Tracking notes is very simple, Allegro Music Transformer counts up how many notes are in the seed composition and adds that number into the final token count. It also keeps a dictionary that contains every note’s pitch, length, dynamic, and timbre.

For tracking melodies, Allegro Music Transformer makes an educated guess on what it the melody. A lot of the time, the melody will have more notes and non-chord tones, and it allows the neural network to derive them relatively well. From there, each note in the melody is given a token and a greater weight in the resulting composition. This ensures that the melody the neural network generates a distinct melodic line that is easy for listeners to latch onto when they are listening.

For tracking chords, Allegro Music Transformer keeps track of any points in time within the music when multiple notes are played. From there, it picks points in time where the harmony is established using an educated guess. The neural network asks questions like: what is the likelihood that these notes being played together is apart of a harmonizing chord? Could this arpeggiated line be a harmonizing chord that is split up? From there, it counts every time that a harmonizing chord is included, and it adds that number to the total number of tokens.

Because the AI has to take all of these factors into consideration, it can actually take a long time for the AI to generate its own resulting tokens. For me, I often spend a quarter of an hour to get four twenty-second audio clips. Even if I try to get the AI to generate more tokens, it can become more and more likely to fall into local optima. These local optima represent sequences of notes that still fit well into the generated composition but aren’t necessarily the BEST continuation that the AI could generate. The AI tricks itself into thinking its result is the best it can do when there’s an absolute optimum that it hasn’t ended up in. An analogy would be a mountain climber climbing Mount Kilimanjaro, thinking that is the highest mountain in the world, but they forget that there are higher peaks, like Mount Everest or K2. The resulting generation will repeat over and over as the neural network struggles to escape the local optimum, and the music ends up repetitive, uninteresting, and unmoving.

### So How Do We Fix These Problems?

In the end, my solution was to write a seed, take the best AI continuation, and then I would continue the composition based off of what the AI wrote. Then, the process could loop over and over until I had a sizable piano piece. This way, the AI isn’t generating a lengthy and repetitive musical passage, and it has more human composition points to latch onto throughout the piece. This is sort of like a ping pong game where the neural network and I alternate writing out new music for the composition until I decide the result is long enough to present.

### Final Product

Below are two versions of the final product piece I will be performing. They are both the same piece, just presented in two different ways.

**YOUTUBE LINK (https://youtu.be/K1dFgR3DEEI?si=87R7YqmQD6ZA6QvE)**

**YOUTUBE LINK (https://youtu.be/5QS_AlxDZY4?si=bdbvm39-bS9Ho1xm)**

The final product ended up being a rhapsody, which typically means that no section is repeated twice within the piece. I chose to take the final product in the direction of a rhapsody since I wanted to showcase what the AI could come up with when faced with varying styles of music. The music is split into six parts which I named to differentiate them:

1. Largo sciogliendo – Allegro vivace con brio
2. Adagio quasi sogno
3. Moderato scherzando
4. Subito andante
5. Moderato quasi marcia
6. Allegro ma non troppo

I’ll go into more detail about each section in my next blog post.

As always, here is a photo from the week:

**IMAGE HERE**

### Next Week’s Objective

Next week, I will be focusing on learning the first four sections of the AI piece in preparation for my final product performance. Although I’m kind of worried that I didn’t give myself enough time to learn the piece, I like the challenge of having to learn it so quickly. Plus, the techniques utilized in this piece aren’t too difficult, so hopefully it won’t take me too long to learn.

As always, thank you for sticking around! I hope to see you in my next blog post!

– Eddie 😛

---

## Week 8 (4/24) – Playing The First Half Of The AI Piece
Edward W - **April 27, 2024 5:17 am**

**This week’s goal:** Playing (to the best of my ability) the first half of the AI-composed piece.

**My survey:** https://thejumpingjackal.github.io/senior-project/survey/

Thank you to everyone who has taken the survey so far! I am beyond grateful for all the feedback that has been sent to me and all the help and support I’ve received from everybody so far! If you haven’t taken the survey yet, please do; I would love to have your input!

I do want to just note that the survey seems to be having a lot of issues on mobile devices. I’m not completely sure how to fix this, but I would advise that you take the survey on a desktop device, especially if you’re having trouble with the survey on a mobile device. Sorry for the inconvenience, and thanks for your help.

### Anyway, Onto This Week’s Progress…

This week, I spent my time practicing the first half of the piece that I composed using AI last week. I think one big problem for me throughout all of the time I spent practicing was that my piano technique isn’t developed to the point that I could play what the AI wrote well. The AI doesn’t really have an idea of what might be playable for an average pianist, and so sometimes, the compositions can become unrealistic for me to play. I ended up having to shave off a lot of the extra notes that the AI put into the composition in order to save myself too much work, especially techniques like stride left hand, which is a technique where the left hand plays bass notes that alternate between low and high, forcing the player to make large leaps with their left hand.

For each section, I thought I’d break down the inspiration that went into composing each section, what challenges I faced in each section, and some challenges that the AI faced in composing each section as well.

As a little preface, each section is named in Italian since the language is representative of a sort of “lingua franca” for musicians. I will make sure to explain what each one means.

### Section 1: Largo Sciogliendo – Allegro Vivace Con Brio

**YOUTUBE LINK (https://youtu.be/jiHJToKfKYE?si=4yb0BykpOhHn0kCP)**

Largo sciogliendo means “slow \[and\] melting”, the thought being that each note in this section melts into the next. I composed the right-hand portion, and I had the AI create a left-hand to go with it. The AI didn’t end up being too creative, since it only ended up adding two chords, but I think they both complement the texture of the section very well.

This part of section 1 was very much inspired by John Cage’s *Dream* (1948). I wanted to replicate how I felt the first time I listened to this piece, and although this section is only meant to serve as an introduction to the grander “Allegro vivace con brio” theme, I still wanted it to feel contemplative.

Allegro vivace con brio means “fast [and] animated with liveliness”. This is the first proper theme that is established within the rhapsody, and it is very much inspired by the opening theme in Charles-Valentin Alkan’s *Concerto for Solo Piano*. I was picturing a sort of quick dance when I composed the seed that the AI would generate off of, which you can hear in the beginning, but I also wanted a sort of lopsided feeling, which I achieved by making the theme three measures long. In most of the music we are used to, themes will last for an even number of measures, usually a power of 2, so when an extra measure is tacked onto the end of a two-measure theme, it can be quite a different listening experience. To top all of that off, after three repetitions of the three-measure theme, the whole phrase is finished off with a four-measure theme, breaking the pattern, and making it harder for the listener to keep track of the musical structure of the piece.

One credit that I’ll give to the AI is that it is very, VERY good at copying and modifying what it has inputted. It ended up taking my theme and moving it two notes, and it genuinely feels like a very natural continuation to the original seed. From there, the AI repeats the main phrase twice more, adding its own variations before the piece ends, and I think composition-wise, the AI does a fairly natural job in continuing the music. It sounds pretty good, and it’s not too difficult to play, so I had a lot of fun adding my own interpretation to this section.

### Section 2: Adagio Quasi Sogno

**YOUTUBE LINK (https://youtu.be/h_SxkUuerhU?si=aggQwVpFxxGSJXwL)**

Adagio quasi sogno means “slow, like a dream”. To contrast the previous theme, I wanted the new theme to be slow and connected, compared to the sharp, disconnected notes from the first section. I was inspired by two main sources for this theme: Dmitri Shostakovich’s *String Quartet No. 8* and the arpeggiated left hand that is featured in several of Sergei Rachmaninoff’s piano works. The former features the use of an Aeolian dominant scale, which is similar to a minor scale, but the third note of the scale is raised, giving the piece a more mysterious feel.

The AI did fairly well with this seed, not only adding its own variations, but also progressing the section out of an Aeolian dominant scale into a major scale, which helped to broaden the piece, both harmonically and melodically. This was by far my favorite section to play!

One minor problem I ran into was at mm. 78 – 79 and mm. 82 – 83 in the score, where the right hand has descending sextuplets. I ended up having to slow down these measures just to give my hand enough time to move from each note since the notes were spaced out quite far, and unfortunately, it meant I also had to sacrifice some articulation so that I’m not playing this section overwhelmingly slowly.

### Section 3: Moderato Scherzando

**YOUTUBE LINK (https://youtu.be/uO0qCFXoGD4?si=8_EpA3fp8q7uEsLe)**

Moderato scherzando means “moderate” and “joking”. I again wanted to contrast the previous theme, so I decided on a quicker, more playful seed to start the next section. I again had two inspirations for this section: Maurice Ravel’s *Minuet in C-sharp minor* for the melody of the section, and stride piano for the left-hand accompaniment. The music follows a very basic ii-V-I progression, which is a chord progression that is commonly used in jazz music, and I was too scared to try anything outside of that since I’m not extremely familiar with jazz piano.

The AI did… okay? with this section. It did continue the main theme from the seed I composed, but then it completely transitioned into a new theme that it seemingly pulled out of nowhere. This theme would end up becoming the “Subito andante” sections of the music that would be sandwiched between the faster “Moderato scherzando” passages. This also meant that technically, the “Subito andante” section is the only section in the entire piece that is completely composed by AI.

For this section, I ended up having to simplify it a lot. It was too difficult for me to play a lot of the chords the AI had composed, so I had to cut out some notes to allow myself to maintain the tempo that the AI had set. Alongside this, the stride piano in the left hand ended up being too difficult for me to play, so I had to cut out an octave from the bass notes so I could maintain accuracy with my notes.

I also ended up correcting one error from the AI. At the end of the first “Subito andante” section, the AI had gotten itself caught in a local optimum, meaning the music would keep repeating the same bars over and over again. Despite this, I really liked the section, and so I composed a transition to allow the “Subito andante” section to move back into the “Moderato scherzando” section.

Section 4: Subito Andante

**YOUTUBE LINK (https://youtu.be/rsqqdWrx8U8?si=sSkqitP3GN5JGQtm)**

Subito andante means “suddenly walking [pace]”. I won’t talk about my inspiration here since this section was completely composed by AI, but I really fell into love with the contrast between the “Moderato scherzando” section and this section. The AI ended up making this section a much slower and grander theme, and it was really fun to play the large chords in the right hand.

The first half of the section features a chromatic key shift, meaning that the original key we are in (F major) is raised up a half step, the resulting key being f♯ minor. This was actually quite surprising to me, since typically, the AI will stay in one key center and try not to move around, so this shift was completely out-of-the-blue for me.

The second half of the section moves into a more flowy theme, featuring sextuplet arpeggios in both hands. This leads into a new theme where the left hand has the melody. This also surprised me as well, since the left hand having the main melody isn’t particularly common for most piano pieces, but the AI ended up adding this in for what seems like no particular reason. Finally, I added one measure to help the AI transition to the next section.

This section was a whole bunch of unexpected and unforeseen themes from the AI, and although they are certainly spontaneous decisions on the AI’s part, the section still blends together pretty well. This passage was also very playable, which I hadn’t thought the AI could do, considering the previous section, so the simpler music allowed me to add more articulation into my own playing.

### Conclusions + Some Thoughts About AI And Art In General
This week showed me a lot about AI music! I think that even throughout this project, I was always thinking to myself that AI couldn’t possibly modulate keys or vary chords, but in this piece, it was able to do that and more. AI is already 80% of the way there, and it was mind-boggling thinking of all the ways that AI could end up replacing humans in composition-heavy industries, such as movie soundtracks, the greater music industry, and even small-scale musical productions.

But all of this led me to one big question this week: does music need to AI’d?

And how does that extend to all art?

I feel like we marvel at seeing AI being able to do so well in a field that we previously thought untouchable. We’ve always thought of art and music as inherently creative, completely untouchable by artificial machines with mechanical minds, and it feels so uncanny that now, AI can compose a piece like the one I have made here in under ten minutes. And as GPUs get better and better, that time gets lower and lower, and the uniqueness of human creativity grows more and more obsolete.

Being a musician for so long, I definitely have bias against AI music. I don’t think that we should be mechanizing art, especially since humans have created art for our own enjoyment. Art serves no physical purpose to humans, but it is still so incredibly important to us. Art is truly “of the people, by the people, for the people” in its purest form, so the automation of this process—where we create, enjoy, and bond over the sheer beauty of raw human talent—almost feels like a betrayal of what we originally intended art to do for us.

AI can also feature biases, such as how AI art generators like DALL-E would only produce pictures of men when met with prompts for words like “doctor”, “lawyer”, “CEO”, etc. For music, this means that AI will have heavy bias towards Western music. I actually got to talk about this with two of my old friends: Naishya G., a violinist and a classical Indian svara singer, and Joseph I., an oboist and a shakuhachi flutist. Since they have backgrounds in both Western and non-Western music, I definitely wanted to get some insights into their experiences with AI.

Naishya told me that “AI music I’ve heard with violin can be quite good … It hates generating more complex violin music … When I try to get it to generate something simple I would sing at my mandir, it always generates complete nonsense.” Here, she’s referring to the Carnatic svara system that constitutes a lot of the music in Southern India. Instead of the “*do*, *re*, *mi*, *fa*, *so*, *la*, *ti*” you might be familiar with, she would sing “*saa*, *ri*, *ga*, *ma*, *pa*, *dha*, *ni*“, which is tuned differently to our Western musical scale. Because of this different tuning, it is very, very difficult for AI that have trained on readily available data from Western music to generate music in this “foreign” scale.

Same thing happened in the conversation I had with Joseph: “The shakuhachi only uses the minor pentatonic scale, which AI is fine with. But we have these embellishments in the music that can either be a whole semitone off or a half semitone off … Those embellishments, the AI completely ignores.”

These calls that I had demonstrate that there are still a lot of shortcomings that AI has with respect to worldwide music that we might not be familiar with. And it’s because of these shortcomings and the “human quality of art” that I don’t particularly support AI completely replacing art. AI might have some merits as a pedagogical tool, however, since it is good at replicating patterns, but I don’t like the idea of using something that is so mechanical on something that should be so, so human.

Although that’s my take on it, I’d also love to hear your thoughts! I know art means different things to different people, so feel free to share your considerations towards AI arts in the comments below.

### Next Week’s Objective

Next week, I will be focusing on learning the last two sections of the AI piece to prepare for my final product performance. Fingers crossed that it’s not too difficult!

As always, thank you for sticking around! I hope to see you in my next blog post!

– Eddie 😛

---

## Week 9 (5/1) – Playing The Last Half Of The AI Piece
Edward W - **May 2, 2024 11:38 pm**

**This week’s goal:** Playing (to the best of my ability) the last half of the AI-composed piece.

This week, I spent my time practicing the last half of the AI piece. A lot of the problems from last week were still present in this week (i.e. difficult passagework, technical challenges, etc.), and similarly, I ended up having to shave off a lot of notes from the score in order to play these pieces fairly well.

Just like in the last post, I’ll break down the inspiration that went into composing each section, what challenges I faced in each section, and some challenges that the AI faced in composing each section as well. In addition, each section will have an explanation of its title, since all the titles are in Italian, which is a sort of “musical lingua franca.”

### Section 5: Moderato Quasi Marcia

**YOUTUBE LINK (https://youtu.be/v383StK1vLQ?si=c8VJwD5IRLXn7DHr)**

Moderato quasi marcia means “moderate, like a march”. I am a big fan of musical contrasts, so I wanted this to be different from the flowing, connected sounds of the previous sections and more like a military march. The loud, accented notes of the piece were inspired by Igor Stravinsky’s *Danse infernale de tous les sujets de Kastchei* (“Infernal dance of all of Kastchei’s subjects”) from his Firebird suite, especially since they provide a lot of contrast to the melody in the middle register of the piano. The other parts of the piece were actually partially inspired by the theme of Niccolò Paganini’s Caprice No. 24 in A minor, which happens to be one of my favorite violin pieces.

The AI write fairly similarly to the original seed I had written, although the only challenge that I had with the piece was a running A minor melodic scale in the right hand that the AI had spontaneously placed within the piece.

Just like with the third section, Moderato scherzando, I had to simplify a lot of the notes in this piece as well. The jumps in both hands were very difficult for me to do accurately, and coupled with the octaves in the right hand, I would say this is by far the most difficult section for me in the entire piece. Nevertheless, this one is also my favorite; I think the music feels simplistic yet powerful.

The ending features arpeggios that lead into the final section of the piece.

### Section 6: Allegro Ma Non Troppo

**YOUTUBE LINK (https://youtu.be/f8LrRVxKDu8?si=vxRNW3RkzRYTnivo)**

Allegro ma non troppo means “fast, but not too much”. This section was a really fun one for me to play, especially since it features quick scales and arpeggios that I had a lot of fun practicing. The main inspiration for this section was the theme from the third movement of Fryderyk Chopin’s Sonata No. 3 in B minor.

As usual, the AI largely copied the input, but added its own scales and arpeggios, which made the piece much more difficult. The AI composed a lot of moments where the right hand is overlapping the left hand, which was pretty difficult for me to play clearly. Along with this, a lot of the scales and arpeggios were very fast, and I ended up having to slow them down so I could more easily play them.

The biggest challenge of this section was at the end, which musicians commonly refer to as a “coda”. Not only were there quick jumps that both hands had to make simultaneously throughout the passage, but there were also large jumps in the left hand toward the end, where my left hand would have to jump almost three octaves within a beat with fairly good accuracy. This was somewhat manageable after a lot of practice, but it ended up making this section much harder than it had been originally.

Finally at the end of the piece, there are big, flashy chords for a loud, dramatic finish.

### Conclusions

The past three weeks have helped give me a better understanding of what AI is capable of, and what it isn’t capable of. Here are some major points I noticed:

1. **AI loves repetition.** I think the neural network puts a lot of emphasis on following patterns in your original seed compositions, especially since those compositions would usually already have developed harmonies and melodies that it can branch off of. By using this sort of pattern recognition, the AI can have an easier time in creating its own music by basing it off of the seed composition more. If the neural network found a good enough passage, it would repeat it continuously (as a local optimum), since the repetition allows for continued stability in the composition.
2. **AI hates creating beginnings and endings.** I tried to have AI make an introduction and a coda to the piece, and both times, it ended up writing a continuation that didn’t exactly “conclude”. In the end, I had to almost completely step in to write my own beginnings and endings, since the AI’s attempts at creating these sections didn’t work out very well.
3. **AI has trouble recognizing the limitations of instrumentalists.** There were several passages created by the AI that were extremely difficult for me to play, and I ultimately had to intervene and reduce the number of notes in a passage so that my final product could be cohesive if I were to perform it. This same thing happened when I was running Mozart’s quartet pieces through the AI; the AI would produce something that was either out of range for the violins, or too fast for the violins.

This piece was very exciting to practice up, and for my final presentation, I hope to play it and walk the audience through some of the choices that the AI made throughout the piece.

### Next Week’s Objective

With my survey already being closed, it’s time for me to analyze the data. Although I’ve looked at the data a bit, I haven’t gotten a proper chance to fully analyze it, so it will be very fun for me to see what findings the survey’s data will offer!

As always, thank you for sticking around! I hope to see you in my next blog post!

– Eddie 😛

---

## Week 10 (5/8) – Final Thoughts And Results
Edward W - **May 11, 2024 11:15 pm**

**This week’s goal:** Gathering and analyzing the data I collected from my survey.

Hello everyone! In this penultimate post, I’ll be revealing the answers to my survey and detailing the final results from my survey. But before that, I wanted to take the time to thank everyone who took the survey. I am honestly beyond grateful for your input despite how long my survey ended up being, and I could never have made it this far without all of your help! Thank you again for your time and patience!

Without further ado…

### Here Are The Survey Results!

In total, I got 62 responses for my survey! The average score was 3.323 / 10 questions being correctly identified as AI, with the lowest score being 0 / 10, and the highest score being 7 / 10. Typically, the score that a person got on the survey varied by approximately 1.352 from the mean score of 3.323. The 25% percentile score was 2, the median score was 3, and the 75% percentile score was 4.

Below, I’ll show the results for each question along with the answers.

**<span style="text-decoration: underline;">Key</span>**

<table style="border-collapse: collapse;">
	<tbody>
		<tr>
			<td style="padding: 0px 10px; text-align: center;"><b>0+  5+  10+</b></td>
			<td style="padding: 0px 10px;">Number of years of musical experience that a surveyed group has per person</td>
		</tr>
		<tr>
			<td style="padding: 0px 10px; text-align: center; background-color: #ffe6f7;">50.00%  2.50</td>
			<td style="padding: 0px 10px;">Lowest percentage/emotional rating</td>
		</tr>
		<tr>
			<td style="padding: 0px 10px; text-align: center; background-color: #c8e1cc;">50.00%</td>
			<td style="padding: 0px 10px;">AI percentage (correct answer)</td>
		</tr>
		<tr>
			<td style="padding: 0px 10px; text-align: center; background-color: #c8e1cc;">2.50</td>
			<td style="padding: 0px 10px;">Highest emotional rating</td>
		</tr>
		<tr>
			<td style="padding: 0px 10px; text-align: center; background-color: #ffe6f7;"><b>0+  5+  10+</b></td>
			<td style="padding: 0px 10px;">Sample group rates AI as most human-like of the three<br/>Sample group rates AI as least emotional of the three</td>
		</tr>
		<tr>
			<td style="padding: 0px 10px; text-align: center; background-color: #c8e1cc;"><b>0+  5+  10+</b></td>
			<td style="padding: 0px 10px;">Sample group rates AI correctly fairly consistently<br/>Sample groups rates AI as most emotional of the three</td>
		</tr>
	</tbody>
</table>

#### 1. Baroque – Solo Organ

**Original Piece:** Bach, Johann Sebastian – *Fuge in c-moll über ein Thema von Legrenzi*, BWV 574

**YOUTUBE LINK (https://youtu.be/r31oVltcU1A?si=knMIzzex1zVA--4l&t=205)**

<table style="border-collapse: collapse;">
	<tbody>
		<!-- SEED -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;" rowspan="2"><b>Main Audio Clip</b></td>
			<td style="border: none;" rowspan="2">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q1/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Scores</b></td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #ffe6f7;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>10+</b></td>
		</tr>
		<!-- OG -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q1/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">27.42%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">35.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">50.00%</td>
		</tr>
		<!-- AI -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">AI Ending</td>
			<td style="border: none; background-color: #c8e1cc;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q1/aiend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">32.26%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">25.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">25.00%</td>
		</tr>
		<!-- ME -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">My Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q1/myend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">40.32%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">40.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">25.00%</td>
		</tr>
	</tbody>
</table>
<table style="border-collapse: collapse;">
	<tbody>
		<tr>
			<td style="border: none;" rowspan="2"> </td>
			<td style="border: none;" rowspan="2"> </td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Happy</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Sad</b></td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #ffe6f7;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #ffe6f7;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #ffe6f7;"><b>10+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #c8e1cc;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #c8e1cc;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #c8e1cc;"><b>10+</b></td>
		</tr>
		<!-- SEED -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;"><b>Main Audio Clip</b></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q1/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.145</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.70</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.67</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.032</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">2.10</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">2.08</td>
		</tr>
		<!-- OG -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q1/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.355</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.95</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">3.00</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.968</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.15</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.25</td>
		</tr>
		<!-- AI -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">AI Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q1/aiend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.855</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">2.45</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">2.33</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.387</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.35</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.42</td>
		</tr>
		<!-- ME -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">My Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q1/myend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.258</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.75</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.75</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.839</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.15</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.17</td>
		</tr>
	</tbody>
</table>

#### 2. Classical – String Quartet (2 Violins, 1 Viola, 1 Cello)

**Original Piece:** Mozart, Wolfgang Amadeus – String Quartet No. 10 in C-major, K.170

**YOUTUBE LINK (https://youtu.be/rtUMst-YZCM?si=BmBAdDtjtkFwfXXZ&t=690)**

<table style="border-collapse: collapse;">
	<tbody>
		<!-- SEED -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;" rowspan="2"><b>Main Audio Clip</b></td>
			<td style="border: none;" rowspan="2">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q2/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Scores</b></td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>10+</b></td>
		</tr>
		<!-- OG -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q2/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">30.65%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">40.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">33.33%</td>
		</tr>
		<!-- AI -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">AI Ending</td>
			<td style="border: none; background-color: #c8e1cc;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q2/aiend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">38.71%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">35.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">33.33%</td>
		</tr>
		<!-- ME -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">My Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q2/myend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">30.65%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">25.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">33.33%</td>
		</tr>
	</tbody>
</table>
<table style="border-collapse: collapse;">
	<tbody>
		<tr>
			<td style="border: none;" rowspan="2"> </td>
			<td style="border: none;" rowspan="2"> </td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Happy</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Sad</b></td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>10+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #ffe6f7;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #c8e1cc;"><b>10+</b></td>
		</tr>
		<!-- SEED -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;"><b>Main Audio Clip</b></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q2/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">3.000</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">3.45</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">3.58</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.274</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.55</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.50</td>
		</tr>
		<!-- OG -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q2/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.774</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">3.15</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">3.17</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.403</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.55</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">1.58</td>
		</tr>
		<!-- AI -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">AI Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q2/aiend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.839</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">3.30</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">3.33</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.355</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.55</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">1.58</td>
		</tr>
		<!-- ME -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">My Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q2/myend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">2.710</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">3.15</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">3.00</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">1.419</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">1.60</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">1.58</td>
		</tr>
	</tbody>
</table>

#### 3. Romantic – Solo Piano

**Original Piece:** Liszt, Franz – Le rossignol (1st version), S. 249d

**YOUTUBE LINK (https://youtu.be/u54CXKL__QA?si=puyaHZrbd3Mq_Bf_&t=119)**

<table style="border-collapse: collapse;">
	<tbody>
		<!-- SEED -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;" rowspan="2"><b>Main Audio Clip</b></td>
			<td style="border: none;" rowspan="2">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q3/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Scores</b></td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #ffe6f7;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>10+</b></td>
		</tr>
		<!-- OG -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q3/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">27.42%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">30.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">41.67%</td>
		</tr>
		<!-- AI -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">AI Ending</td>
			<td style="border: none; background-color: #c8e1cc;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q3/aiend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">20.97%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">30.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">33.33%</td>
		</tr>
		<!-- ME -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">My Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q3/myend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">51.61%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">40.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">35.00%</td>
		</tr>
	</tbody>
</table>
<p>
	<!-- background-color: #ffe6f7; background-color: #c8e1cc; -->
</p>
<table style="border-collapse: collapse;">
	<tbody>
		<tr>
			<td style="border: none;" rowspan="2"> </td>
			<td style="border: none;" rowspan="2"> </td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Happy</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Sad</b></td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>10+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>10+</b></td>
		</tr>
		<!-- SEED -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;"><b>Main Audio Clip</b></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q3/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">3.435</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">3.70</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">3.92</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.258</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.35</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.25</td>
		</tr>
		<!-- OG -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q3/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">3.581</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">3.80</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">3.83</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.371</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.55</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.58</td>
		</tr>
		<!-- AI -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">AI Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q3/aiend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">3.355</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">3.55</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">3.75</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.290</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.50</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.50</td>
		</tr>
		<!-- ME -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">My Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q3/myend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">3.194</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">3.45</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">3.58</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">1.452</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">1.65</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">1.67</td>
		</tr>
	</tbody>
</table>

#### 4. Contemporary – Solo Piano

**Original Piece:** Prokofiev, Sergei – XIV. *Feroce* from 
*Visions fugitives*, Op. 22

**YOUTUBE LINK (https://youtu.be/7PCAkEfkHKU?si=HNA47Ag5odV-e1Q0&t=834)**

<table style="border-collapse: collapse;">
	<tbody>
		<!-- SEED -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;" rowspan="2"><b>Main Audio Clip</b></td>
			<td style="border: none;" rowspan="2">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q4/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Scores</b></td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>10+</b></td>
		</tr>
		<!-- OG -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q4/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">30.65%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">30.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">25.00%</td>
		</tr>
		<!-- AI -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">AI Ending</td>
			<td style="border: none; background-color: #c8e1cc;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q4/aiend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">33.87%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">35.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">33.33%</td>
		</tr>
		<!-- ME -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">My Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q4/myend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">35.48%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">35.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">41.67%</td>
		</tr>
	</tbody>
</table>
<p>
	<!-- background-color: #ffe6f7; background-color: #c8e1cc; -->
</p>
<table style="border-collapse: collapse;">
	<tbody>
		<tr>
			<td style="border: none;" rowspan="2"> </td>
			<td style="border: none;" rowspan="2"> </td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Happy</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Sad</b></td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>10+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #c8e1cc;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #c8e1cc;"><b>10+</b></td>
		</tr>
		<!-- SEED -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;"><b>Main Audio Clip</b></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q4/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.516</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.85</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">3.17</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.742</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.15</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.08</td>
		</tr>
		<!-- OG -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q4/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.774</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">3.30</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">3.50</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.597</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.80</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.75</td>
		</tr>
		<!-- AI -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">AI Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q4/aiend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.484</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.75</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">3.00</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.677</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.15</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.17</td>
		</tr>
		<!-- ME -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">My Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q4/myend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">2.210</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">2.45</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">2.58</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">1.790</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.05</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.00</td>
		</tr>
	</tbody>
</table>

#### 5. Contemporary – Solo Cello

**Original Piece:** Kodály, Zoltán – Sonata for Solo Cello in b-minor, Op. 8

**YOUTUBE LINK (https://youtu.be/phygv_Et9sQ?si=K7MwzQXLz7usQWdV&t=1573)**

<table style="border-collapse: collapse;">
	<tbody>
		<!-- SEED -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;" rowspan="2"><b>Main Audio Clip</b></td>
			<td style="border: none;" rowspan="2">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q5/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Scores</b></td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #c8e1cc;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #ffe6f7;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>10+</b></td>
		</tr>
		<!-- OG -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q5/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">24.19%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">35.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">33.33%</td>
		</tr>
		<!-- AI -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">AI Ending</td>
			<td style="border: none; background-color: #c8e1cc;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q5/aiend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;"><b>41.94%</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">25.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">33.33%</td>
		</tr>
		<!-- ME -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">My Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q5/myend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">33.87%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">40.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">33.33%</td>
		</tr>
	</tbody>
</table>
<p>
	<!-- background-color: #ffe6f7; background-color: #c8e1cc; -->
</p>
<table style="border-collapse: collapse;">
	<tbody>
		<tr>
			<td style="border: none;" rowspan="2"> </td>
			<td style="border: none;" rowspan="2"> </td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Happy</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Sad</b></td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #ffe6f7;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #ffe6f7;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #ffe6f7;"><b>10+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #c8e1cc;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #c8e1cc;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #c8e1cc;"><b>10+</b></td>
		</tr>
		<!-- SEED -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;"><b>Main Audio Clip</b></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q5/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.113</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.30</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.25</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.097</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">2.45</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">2.75</td>
		</tr>
		<!-- OG -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q5/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.952</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.20</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.83</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.435</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.90</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">3.33</td>
		</tr>
		<!-- AI -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">AI Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q5/aiend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.774</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.90</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.67</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.597</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">3.05</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">3.42</td>
		</tr>
		<!-- ME -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">My Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q5/myend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.032</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.95</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.83</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">2.048</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">2.45</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.83</td>
		</tr>
	</tbody>
</table>

#### 6. Jazz – Jazz Quartet (Alto Sax, Double Bass, Piano, Drumset)

**Original Song:** Layton, Turner – After You’ve Gone
Piano: Emmet Cohen
Trumpet: Bruce Harris
Alto Saxophone: Patrick Bartley
Double Bass: Russell Hall
Drumset: Joe Saylor

**YOUTUBE LINK (https://youtu.be/984ksjle4YA?si=6g51MJzHYwgQXhSz&t=165)**

<table style="border-collapse: collapse;">
	<tbody>
		<!-- SEED -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;" rowspan="2"><b>Main Audio Clip</b></td>
			<td style="border: none;" rowspan="2">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q6/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Scores</b></td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #c8e1cc;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #c8e1cc;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #c8e1cc;"><b>10+</b></td>
		</tr>
		<!-- OG -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q6/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">30.65%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">15.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">8.33%</td>
		</tr>
		<!-- AI -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">AI Ending</td>
			<td style="border: none; background-color: #c8e1cc;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q6/aiend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;"><b>45.16%</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;"><b>65.00%</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;"><b>83.33%</b></td>
		</tr>
		<!-- ME -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">My Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q6/myend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">24.19%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">20.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">8.33%</td>
		</tr>
	</tbody>
</table>
<p>
	<!-- background-color: #ffe6f7; background-color: #c8e1cc; -->
</p>
<table style="border-collapse: collapse;">
	<tbody>
		<tr>
			<td style="border: none;" rowspan="2"> </td>
			<td style="border: none;" rowspan="2"> </td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Happy</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Sad</b></td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #ffe6f7;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #ffe6f7;"><b>10+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>10+</b></td>
		</tr>
		<!-- SEED -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;"><b>Main Audio Clip</b></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q6/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">3.532</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">3.85</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">4.25</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.210</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.30</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.08</td>
		</tr>
		<!-- OG -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q6/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">3.371</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">3.80</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">4.08</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">1.242</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">1.40</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">1.25</td>
		</tr>
		<!-- AI -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">AI Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q6/aiend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">3.403</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">3.60</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">3.83</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.210</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.30</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.17</td>
		</tr>
		<!-- ME -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">My Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q6/myend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">3.532</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">3.80</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">4.08</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.129</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.25</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.08</td>
		</tr>
	</tbody>
</table>

#### 7. World – Alto (Clarinet), Tenor (Bassoon), Lyre, Frame Drum

**Original Song:** Seikilos – Epitaph to Euterpe
Tenor + Lyre: Yerko Lorca
Alto + Frame Drum: Kuan Yin

**YOUTUBE LINK (https://www.youtube.com/watch?v=qdlFLw5Asc8&t=46)**

<table style="border-collapse: collapse;">
	<tbody>
		<!-- SEED -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;" rowspan="2"><b>Main Audio Clip</b></td>
			<td style="border: none;" rowspan="2">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q7/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Scores</b></td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #ffe6f7;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #ffe6f7;"><b>10+</b></td>
		</tr>
		<!-- OG -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q7/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">30.65%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">40.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">33.33%</td>
		</tr>
		<!-- AI -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">AI Ending</td>
			<td style="border: none; background-color: #c8e1cc;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q7/aiend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">33.87%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">30.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">25.00%</td>
		</tr>
		<!-- ME -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">My Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q7/myend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">35.48%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">30.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">41.67%</td>
		</tr>
	</tbody>
</table>
<p>
	<!-- background-color: #ffe6f7; background-color: #c8e1cc; -->
</p>
<table style="border-collapse: collapse;">
	<tbody>
		<tr>
			<td style="border: none;" rowspan="2"> </td>
			<td style="border: none;" rowspan="2"> </td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Happy</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Sad</b></td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #c8e1cc;"><b>10+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #c8e1cc;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>10+</b></td>
		</tr>
		<!-- SEED -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;"><b>Main Audio Clip</b></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q7/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.871</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">3.35</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">3.33</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.565</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.50</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.33</td>
		</tr>
		<!-- OG -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q7/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.903</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">3.25</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">3.25</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.484</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.45</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.33</td>
		</tr>
		<!-- AI -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">AI Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q7/aiend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.839</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">3.30</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">3.42</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">1.613</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.55</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.42</td>
		</tr>
		<!-- ME -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">My Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q7/myend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">2.694</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">3.15</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">3.17</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.597</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">1.60</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">1.50</td>
		</tr>
	</tbody>
</table>

#### 8. Pop – Alto (Clarinet), Bass Guitar, Trumpets, Synth, Drumset

**Original Song:** 藍心湄 – 走路的女孩 from 我要你變心
Lan, Pauline – *Walkman Girl* from *Change Your Heart*

**YOUTUBE LINK (https://youtu.be/4idGM8xvv2Q?si=JP57izSaBiYLEZE7&t=56)**

<table style="border-collapse: collapse;">
	<tbody>
		<!-- SEED -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;" rowspan="2"><b>Main Audio Clip</b></td>
			<td style="border: none;" rowspan="2">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q8/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Scores</b></td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #ffe6f7;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #ffe6f7;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #ffe6f7;"><b>10+</b></td>
		</tr>
		<!-- OG -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q8/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">41.94%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">55.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">66.67%</td>
		</tr>
		<!-- AI -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">AI Ending</td>
			<td style="border: none; background-color: #c8e1cc;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q8/aiend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">24.19%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">20.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">8.33%</td>
		</tr>
		<!-- ME -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">My Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q8/myend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">33.87%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">25.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">25.00%</td>
		</tr>
	</tbody>
</table>
<p>
	<!-- background-color: #ffe6f7; background-color: #c8e1cc; -->
</p>
<table style="border-collapse: collapse;">
	<tbody>
		<tr>
			<td style="border: none;" rowspan="2"> </td>
			<td style="border: none;" rowspan="2"> </td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Happy</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Sad</b></td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>10+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #ffe6f7;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>10+</b></td>
		</tr>
		<!-- SEED -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;"><b>Main Audio Clip</b></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q8/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">3.306</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">3.40</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">3.50</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">1.306</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.40</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.33</td>
		</tr>
		<!-- OG -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q8/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">3.145</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">3.20</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">3.08</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.274</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.40</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.42</td>
		</tr>
		<!-- AI -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">AI Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q8/aiend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">3.258</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">3.30</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">3.25</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.226</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.45</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.50</td>
		</tr>
		<!-- ME -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">My Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q8/myend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">3.290</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">3.30</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">3.00</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.290</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">1.55</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">1.58</td>
		</tr>
	</tbody>
</table>

#### 9. Ambient – Solo Piano

**Original Song:** not a cat. – pov: you lost your hardcore minecraft world

**YOUTUBE LINK (https://youtu.be/B1OviWUVp8w?si=RfCZtKgxnGUsLYsH&t=27)**

<table style="border-collapse: collapse;">
	<tbody>
		<!-- SEED -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;" rowspan="2"><b>Main Audio Clip</b></td>
			<td style="border: none;" rowspan="2">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q9/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Scores</b></td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #c8e1cc;"><b>10+</b></td>
		</tr>
		<!-- OG -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q9/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">35.48%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">35.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">33.33%</td>
		</tr>
		<!-- AI -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">AI Ending</td>
			<td style="border: none; background-color: #c8e1cc;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q9/aiend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">37.10%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">35.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;"><b>41.67%</b></td>
		</tr>
		<!-- ME -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">My Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q9/myend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">27.42%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">30.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">25.00%</td>
		</tr>
	</tbody>
</table>
<p>
	<!-- background-color: #ffe6f7; background-color: #c8e1cc; -->
</p>
<table style="border-collapse: collapse;">
	<tbody>
		<tr>
			<td style="border: none;" rowspan="2"> </td>
			<td style="border: none;" rowspan="2"> </td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Happy</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Sad</b></td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #c8e1cc;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #c8e1cc;"><b>10+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #ffe6f7;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #ffe6f7;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #ffe6f7;"><b>10+</b></td>
		</tr>
		<!-- SEED -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;"><b>Main Audio Clip</b></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q9/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.887</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">2.20</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">1.92</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.323</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.35</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.42</td>
		</tr>
		<!-- OG -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q9/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">1.903</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.30</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.08</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.452</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.35</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.33</td>
		</tr>
		<!-- AI -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">AI Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q9/aiend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.129</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.35</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.33</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">2.145</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">2.20</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">2.08</td>
		</tr>
		<!-- ME -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">My Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q9/myend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.903</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.25</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.08</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.355</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.25</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.25</td>
		</tr>
	</tbody>
</table>

#### 10. Personal Composition – Cello And Piano Duet

**Original Piece:** W., Edward – *Lac de la Nuit* from *Hulló Eperfa Levelek*, Op. 4, No. 4

**YOUTUBE LINK (https://youtu.be/H9sS9sG7S3c?si=qJzeFlE5j1BqAkRn&t=365)**

<table style="border-collapse: collapse;">
	<tbody>
		<!-- SEED -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;" rowspan="2"><b>Main Audio Clip</b></td>
			<td style="border: none;" rowspan="2">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q10/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Scores</b></td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #ffe6f7;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #ffe6f7;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #ffe6f7;"><b>10+</b></td>
		</tr>
		<!-- OG -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q10/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">40.32%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">40.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">50.00%</td>
		</tr>
		<!-- AI -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">AI Ending</td>
			<td style="border: none; background-color: #c8e1cc;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q10/aiend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">24.19%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">30.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">16.67%</td>
		</tr>
		<!-- ME -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">My Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q10/myend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">35.48%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">30.00%</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">33.33%</td>
		</tr>
	</tbody>
</table>
<p>
	<!-- background-color: #ffe6f7; background-color: #c8e1cc; -->
</p>
<table style="border-collapse: collapse;">
	<tbody>
		<tr>
			<td style="border: none;" rowspan="2"> </td>
			<td style="border: none;" rowspan="2"> </td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Happy</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;" colspan="3"><b>Sad</b></td>
		</tr>
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #c8e1cc;"><b>10+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center;"><b>0+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #c8e1cc;"><b>5+</b></td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; text-align: center; background-color: #c8e1cc;"><b>10+</b></td>
		</tr>
		<!-- SEED -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;"><b>Main Audio Clip</b></td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q10/ogseed.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.565</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.85</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">2.75</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.032</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">2.05</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">2.17</td>
		</tr>
		<!-- OG -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">Original Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q10/ogend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.597</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">3.00</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.92</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">2.000</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.10</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.25</td>
		</tr>
		<!-- AI -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">AI Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q10/aiend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.516</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.95</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.92</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.048</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.20</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.42</td>
		</tr>
		<!-- ME -->
		<tr>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">My Ending</td>
			<td style="border: none;">
				<audio src="https://thejumpingjackal.github.io/senior-project/survey/actual/q10/myend.wav" controls="controls">Your browser does not support the audio element.</audio>
			</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">2.452</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">2.05</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #ffe6f7;">2.75</td>
			<!-- SEPARATOR -->
			<td style="border: none; padding-left: 20px; padding-right: 20px; background-color: #c8e1cc;">2.065</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.15</td>
			<td style="border: none; padding-left: 20px; padding-right: 20px;">2.33</td>
		</tr>
	</tbody>
</table>

### Important Trends To Notice

1. The more musical experience a person has, the more likely they are to rate a piece as more emotional than people with less musical experience. I’m not completely sure why this is, but it might be genuinely because one’s experience with music makes them able to relate to and more deeply comprehend and process the music that they are listening to.
2. Typically, the music created by the original composer had higher happiness ratings than other pieces. This just feels like a testament to the greats of music; even if we can’t tell which songs are AI and which ones aren’t empirically, we can still feel that the original makes us more emotional.
3. Typically, the music created by AI and me had higher sadness ratings than other pieces. This was honestly quite surprising to me, since not creating a particularly happy ending doesn’t correlate to a particularly sad one. For some reason, AI just sounds sadder to us, and it’s the same with my compositions as well! (I don’t know whether to be proud or hurt 😂😭)

### Some Answers To My Research Questions

1. Can people tell the difference between AI music and manmade music? – Generally, not really. The only pieces that people were able to find the AI fairly well were for contemporary cello and jazz. These pieces were special, because the AI stood out through its compositions in these pieces. For contemporary cello, the AI was repeating notes without any sort of structure, which helped it to get identified. For jazz, the AI kept following the chord notes for its sax solo. It played it safe in the realm of compositional value, but that ended up backfiring for it in the realm of AI identification.
2. Does increased knowledge of music theory facilitate the identification of AI music? – Kind of, kind of not. People with more musical experience were able to identify AI in ambient music decently, but experience also ended up being a hindrance too, especially for contemporary cello. However, the scores that experienced musicians got in jazz were very, very good, and it kind of showed that when the general populace can find AI fairly well, the experienced musicians will get it right almost all of the time. I think that this experience also led a lot of musicians to question themselves when it came to some of these pieces, which led them to do worse than the general populace sometimes.
3. Does AI music evoke weaker emotional responses in people compared to original compositions? Kind of, kind of not. AI is not completely noticeable worse than manmade music, but it does seem to elicit a slightly lower happiness response in us. With that being said, it does elicit a slightly higher sadness response in us. It shows how the “gut feeling” that many musicians claim they can identify AI music with does exist (kind of), and as AI music becomes quantitatively harder to distinguish from manmade music, it might be this qualitative “gut feeling” that we might have to rely on for identification.

### My Final Product

For my senior project final product, I decided to produce an AI piano piece that I performed at my senior project presentation. For those of you who missed it (or those of you who want to see it again), here is a recording I did of the final piece.

**YOUTUBE LINK (https://youtu.be/iEv4j8N0wJ4?si=kcLJ1UgQyuEkBdjT)**

### Final Thoughts And Conclusions

AI is a lot better than we think, and a future where AI composition is on par with human composition is already here. The results of this project show that AI is already pretty good at fooling us, and it demonstrates that in the future, you have to be alert to what you are listening. Especially since many musical AIs have to scrape music off of the Internet in order to train its databases, it is all the more important to make sure that you are supporting human artists now versus these bots who might not credit the composers its music is taken from.

I think AI has pedagogical value, as it can show aspiring musicians how to build a foundation for their pieces, how to formulate melodies and harmonies, and even what not to do in composition. But purely creating music with it might not create very good results yet.

Thank you for reading my blog posts these past ten weeks! The amount of support I’ve gotten has been overwhelming, and I could never have continued working on this project without it. Thank you again for everything!

– Eddie 😛

---

## Concluding Post And Final Thanks
Edward W - **May 12, 2024 12:00 am**

**My original senior project proposal:** **SENIOR PROJECT PROPOSAL LINK**

**My final presentation:** **SENIOR PROJECT PRESENTATION LINK**

**My final product:**

**YOUTUBE LINK (https://youtu.be/iEv4j8N0wJ4?si=NFxhGFmda42GtGbo)**

### Final Thoughts
This project has shown me a lot about AI and what we can come to expect of it in the coming years. As more and more human experience gets put into crafting and perfecting artificial intelligence, it will continue to grow exponentially and become better and better at things it’s designed to do. I think that as we step into that future, we need to stay cautious. AI is a powerful tool, and it must be used correctly to help people with different tasks. We love to think that we could still be better than AI at all these different tasks, but in today’s world, this thought doesn’t hold as true as we might like it to now.

I have truly had a blast working on this project, and it feels both relieving and bittersweet seeing this whole thing come to an end. I have learned so much about music, artificial intelligence, and even myself. To all of the rising seniors, I’d say it’s definitely worth a try! It’s a lot of work, but it is extremely rewarding.

### Final Thanks

**Dr. Winslow**

**Dr. Martin**

**Dr. B-----**

**Dr. Green**

**Dr. Talasek**

**Mrs. Cohen Gray**

**Mrs. Buckley**

**Mrs. Heyert**

**Kei S-----**

**Sophia G----**

**Naishya G-----------**

**Joseph I--- K-------**

**Dain Y-**

**Isabelle S---**

**My friends and family (you know who you are!)**

Thank you to all of you who took my survey as well! This project would have never been possible without your input!

Thank you again for reading! It has been such an honor to work on this project, and I can’t wait to see what new adventures await me in the coming years.

Bye BASIS!

– Eddie 😛