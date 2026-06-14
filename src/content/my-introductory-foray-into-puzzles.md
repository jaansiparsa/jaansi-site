At the start of summer, I had resolved to create more things, as well as be more creative (which are different things, now more than ever).

In order to create with less pressure and no confounding incentives, I aimed on making things that were fun and not necessarily practical. I wanted to create for the sake of creating without worrying about "would anyone ever buy this" or "how would this make money." Of course, eventually, I want to build things that are useful and impactful (and monetizable). Good product sense is a different skill than original creation, however, and I wanted to develop the latter.

One thing I (and most people, I think) enjoy consuming are puzzles! I particularly love the flavor of games that include 24, Wordle, Kakuro, Sudoku, etc.-- basically, games with very simple rules, yet enough depth that you can keep creating fresh puzzles from the same core framework. So, I figured, wouldn't it be cool to create a completely _new_ type of puzzle?

My next thought (sorry, I know this is antithetical to the whole "learning to create" thing but I was lazy and in bed and it was 11pm) was wouldn't it be _even cooler_ if _ChatGPT_ could generate a completely new type of puzzle?

I pulled out my laptop.

<blockquote class="blog-prompt">
<p>i want to come up with a new game that is easy to get into and easy to make but requires thinking. something like wordle</p>
</blockquote>

<aside class="blog-ai-response" data-model="chatgpt">
<p class="blog-ai-label">ChatGPT</p>
<p>A good "Wordle-like" game usually has these properties:</p>
<ul>
<li>learned in under 30 seconds</li>
<li>one core mechanic</li>
<li>short rounds (1–5 min)</li>
<li>surprising depth/strategy</li>
<li>strong shareability ("I got it in 3")</li>
<li>easy backend/content generation</li>
<li>hard to master even though rules are simple</li>
</ul>
<p>Here are some original concepts that hit those constraints:</p>
</aside>

So far so good...

<aside class="blog-ai-response" data-model="chatgpt">
<p class="blog-ai-label">ChatGPT</p>
<h3>1. Bracket</h3>
<p>You're given 6 concepts and must arrange them into the correct hierarchy/tree.</p>
<p>Example:</p>
<ul>
<li>Mammal</li>
<li>Animal</li>
<li>Golden Retriever</li>
<li>Dog</li>
<li>Organism</li>
<li>Labrador</li>
</ul>
<p>Correct:</p>
<p>Organism → Animal → Mammal → Dog → Labrador/Golden Retriever</p>
<p>The challenge:</p>
<ul>
<li>some are distractors</li>
<li>multiple valid-looking paths</li>
<li>timed mode</li>
</ul>
<p>Why it works:</p>
<ul>
<li>instantly understandable</li>
<li>educational without feeling educational</li>
<li>surprisingly hard at higher levels</li>
<li>easy to generate with AI/Wikipedia graphs</li>
</ul>
<p>Could have:</p>
<ul>
<li>biology edition</li>
<li>startup edition</li>
<li>history edition</li>
<li>internet culture edition</li>
</ul>
</aside>

I was shocked. How could anyone (anything) come up with this and even think to call it a game?

<aside class="blog-ai-response" data-model="chatgpt">
<p class="blog-ai-label">ChatGPT</p>
<h3>2. One Letter Off</h3>
<p>You transform one word into another changing one letter at a time.</p>
<p>CAT → DOG</p>
<p>CAT<br>COT<br>DOT<br>DOG</p>
<p>But:</p>
<ul>
<li>shortest path wins</li>
<li>dictionary constraints</li>
<li>daily puzzle</li>
</ul>
<p>Depth comes from optimization.</p>
<p>Super easy technically:</p>
<ul>
<li>graph search + dictionary</li>
</ul>
</aside>

Word Ladder exists already. You know this idea is saturated when it's a Leetcode question.

<aside class="blog-ai-response" data-model="chatgpt">
<p class="blog-ai-label">ChatGPT</p>
<h3>3. False Memory</h3>
<p>You see 5 facts. One is subtly fake.</p>
<p>Example:</p>
<ul>
<li>Bananas are berries</li>
<li>Octopuses have three hearts</li>
<li>Sharks existed before trees</li>
<li>Goldfish have 3-second memory</li>
<li>Honey never spoils</li>
</ul>
<p>You identify the fake.</p>
<p>The twist: the fake is designed to be plausible, not absurd.</p>
<p>Why it works:</p>
<ul>
<li>social/shareable</li>
<li>"wait WHAT"</li>
<li>educational dopamine</li>
</ul>
<p>Could add confidence betting: "how sure are you?"</p>
</aside>

Um. What.

The rest of the 10+ answers ChatGPT generated were of the same vein; sometmies small variations on existing games, sometimes existing games, and sometimes games that didn't exist due to the fact that they were horrible ideas. Additionally, many of the "games" depended on semantic meaning, making them hard to easily validate. Thinking of games like 24 or Sudoku, this is something that makes puzzles (in my experience) much more fun-- automatically knowing whether you are correct or you need to keep trying.

<blockquote class="blog-prompt">
<p>or something like the math game 24</p>
</blockquote>

<aside class="blog-ai-response" data-model="chatgpt">
<p class="blog-ai-label">ChatGPT</p>
<p>If you like games like "24," the sweet spot is:</p>
<ul>
<li>tiny ruleset</li>
<li>combinatorial depth</li>
<li>players feel smart</li>
<li>quick rounds</li>
<li>mentally satisfying</li>
<li>ideally infinite puzzles</li>
</ul>
<p>That genre is REALLY good because it's:</p>
<ul>
<li>easy to build</li>
<li>hard to exhaust</li>
<li>naturally competitive</li>
</ul>
<p>Here are some strong concepts in that style:</p>
</aside>

Maybe this is it.

<aside class="blog-ai-response" data-model="chatgpt">
<p class="blog-ai-label">ChatGPT</p>
<h3>1. Target</h3>
<p>You get:</p>
<ul>
<li>5 numbers</li>
<li>3 operations allowed</li>
</ul>
<p>Reach the target exactly.</p>
<p>Example:</p>
<p>Numbers: 3, 7, 8, 25, 50</p>
<p>Target: 421</p>
<p>Allowed: +, ×, −</p>
<p>The constraint variations create depth.</p>
<p>Could add:</p>
<ul>
<li>speed leaderboard</li>
<li>minimal-operation scoring</li>
<li>daily puzzle</li>
</ul>
<p>Very buildable.</p>
<h3>2. Expression</h3>
<p>Like 24 but with expression-building constraints.</p>
<p>Example:</p>
<p>Use: 2 2 3 7</p>
<p>Goal: make 19</p>
<p>BUT:</p>
<ul>
<li>exactly one exponent</li>
<li>no multiplication</li>
<li>parentheses required</li>
</ul>
<p>This becomes surprisingly creative.</p>
</aside>

Bro. This was the same thing as 24, simply worse.

ChatGPT continued to list ideas that already existed and/or were simply boring. Of course, my prompts could use some work, but I doubt that was the main issue. Okay, I thought (still lazy), maybe my free tier of ChatGPT just doesn't cut it!

A week or two ago I started paying for Claude Pro, so here was the perfect opportunity to put it to the test. Below is the following conversation I had with Claude:

<blockquote class="blog-prompt">
<p>create a new, interesting, unique puzzle type that no one has created before.</p>
</blockquote>

<aside class="blog-ai-response" data-model="claude">
<p class="blog-ai-label">Claude</p>
<p>Here's an original puzzle type I'm calling Echo Logic — the core mechanic doesn't exist anywhere else.</p>
<p>The idea: every word in the puzzle is secretly "echoing" one hidden word. You read five short clues, each pointing at a different property of the mystery word (its sound, its shape on the page, what it means, what it rhymes with, what category it belongs to). The twist is that the five clues are written as each other's opposites — so you have to triangulate from contradiction, not confirmation. No word bank, no grid. Pure deduction through contrast.</p>
<p>The core innovation here is the contradiction mechanic — most puzzles give you converging clues that all point the same direction. Echo Logic gives you five lenses that seem to fight each other, and the answer is the only word that can survive all five at once. Each clue is specifically written to be undone by the next one, so you can't just solve one lens in isolation.</p>
<p>Give it a try — type your guess and hit Submit. Hit Hint if you want nudges, and let me know what you think of the format!</p>
</aside>

Are we serious right now.

<blockquote class="blog-prompt">
<p>i was thinking something liek wordle, word ladder, or 24</p>
</blockquote>

<aside class="blog-ai-response" data-model="claude">
<p class="blog-ai-label">Claude</p>
<p>Fun! So the spirit we're going for is:</p>
<ul>
<li>One elegant rule that's easy to learn</li>
<li>Daily challenge format (same puzzle for everyone)</li>
<li>Satisfying to solve, shareable result</li>
<li>No fluff — just the game</li>
</ul>
<p>Here are some fresh ideas in that spirit:</p>
<p><strong>🔢 Number-y</strong></p>
<ul>
<li><strong>Sequence</strong> — given 3 numbers in a pattern, guess the 4th. Gets harder each round</li>
<li><strong>Split</strong> — given one number (like 100), split it into parts that multiply/add to a target</li>
</ul>
<p><strong>🔤 Word-y</strong></p>
<ul>
<li><strong>One Away</strong> — given a word, change exactly one letter to match a definition clue. Like Wordle meets crossword</li>
<li><strong>Common Thread</strong> — 4 words shown, find the one hidden word that connects them all (like NYT Connections but simpler)</li>
</ul>
<p><strong>🧠 Logic-y</strong></p>
<ul>
<li><strong>Paths</strong> — a 4x4 grid, draw a path that visits every cell exactly once. Minimalist and beautiful</li>
<li><strong>Bridges</strong> — connect islands with bridges, numbers tell you how many each island needs</li>
</ul>
<p>My honest pick for you:</p>
<p><strong>Common Thread</strong> — it's fresh, elegant, very aesthetic (clean grid of words), easy to validate if it's fun, and nothing quite nails the simple version of it yet.</p>
<p>Which of these feels right? Or I can mash two together 🎮</p>
</aside>

Split and Bridges seemed the best options to me, but split felt too much like a math problem (essentially an extended version of rote factorization), and Bridges existed already.

At last I had to face the unfortunate, but actually quite miraculous, conclusion-- LLMs are really bad at making puzzles. This makes intuitive sense, of course; next token prediction is limited to its training data.

It was almost comical! These simple human-invented games like Wordle or 24 bring so much joy, yet every LLM-generated puzzle I tried felt completely devoid of any spark that makes them fun.

That led to the natural next question, what _does_ make a puzzle fun? Is there any way to quantify it or verify/construct it algorithmically?

I went down a rabbit hole and stumbled across a [video series](https://www.youtube.com/watch?v=oCHciE9CYfA) on puzzle design. It had many interesting takeaways, most of which I'll probably return to later, but in essence:

> "The beauty in puzzles is correlated with the amount of truth they reveal." — John Blow

> "A good puzzle has an AHA moment. A bad puzzle has an O RLY? moment." — Wei-Hwa Huang

At their best, puzzles exploit the natural human instinct to find pleasure of discovering structure where there initially appears to be none. Good designers don't merely assemble rules or generate permutations that follow a set of rules. They construct a path through those rules, leading the solver through a carefully staged trail of both confusion and clarity.

A computer can solve a puzzle. With enough compute, it can also generate millions of valid ones. It can verify that a Sudoku has a unique solution, estimate difficulty, or exhaustively search for sequences of moves that satisfy a constraint.

But validity is not the same as design. The moment of discovery—- that eureka moment that puzzle designers create—- still resists being reduced to rules. If generating a valid puzzle is easy and generating a beautiful one is hard, then there must be something worth understanding in the gap between the two.
