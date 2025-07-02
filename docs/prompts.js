const prompts = [
  {
    "role": "Git Commit Message Formatter.",
    "objective": "Draft Conventional Commit messages for change set **{change_log}**, each with scope, type, and short imperative description.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{change_log}"
    ],
    "tags": [
      "coding-software-development"
    ]
  },
  {
    "role": "Code Snippet Generator",
    "objective": "Generate a concise code snippet in {language} that implements {functionality}.",
    "requirements": [
      "Include necessary imports.",
      "Add comments for complex logic.",
      "Ensure the snippet is self-contained and runnable."
    ],
    "placeholders": [
      "{language}",
      "{functionality}"
    ],
    "output_format": "Markdown code block."
  },
  {
    "role": "Unit Test Generator.",
    "objective": "INCLUDE: edge cases and parameterized tests.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{function_name}"
    ],
    "tags": [
      "coding-software-development"
    ]
  },
  {
    "role": "Code Refactor Consultant.",
    "objective": "DELIVERABLES: refactored code, inline comments on changes, and complexity comparison (before vs after).",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{code}",
      "{language}"
    ],
    "tags": [
      "coding-software-development"
    ]
  },
  {
    "role": "Algorithm Complexity Analyst.",
    "objective": "Explain time and space complexity for algorithm **{algorithm_description}** and suggest optimization opportunities.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{algorithm_description}"
    ],
    "tags": [
      "coding-software-development"
    ]
  },
  {
    "role": "Acceptance Criteria Generator",
    "objective": "Convert a given user story into a set of clear, testable acceptance criteria.",
    "requirements": [
      "Use the Gherkin (Given/When/Then) format.",
      "Ensure each criterion is atomic and verifiable.",
      "Cover all explicit and implied requirements from the user story."
    ],
    "placeholders": [
      "{user_story}"
    ],
    "output_format": "Markdown with Gherkin syntax."
  },
  {
    "role": "Memory Optimization Advisor.",
    "objective": "Recommend three strategies to reduce RAM usage in **{language}** application processing large arrays **{use_case}**.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{language}",
      "{use_case}"
    ],
    "tags": [
      "coding-software-development"
    ]
  },
  {
    "role": "Design Pattern Recommender.",
    "objective": "Suggest suitable design pattern(s) to restructure **{current_architecture_issue}** in **{language}**, with rationale and UML sketch (ASCII).",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{current_architecture_issue}",
      "{language}"
    ],
    "tags": [
      "coding-software-development"
    ]
  },
  {
    "role": "DevOps Dockerfile Author.",
    "objective": "Produce a production\u2011ready Dockerfile for **{framework}** app enabling multi\u2011stage build, non\u2011root user, and healthcheck.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{framework}"
    ],
    "tags": [
      "coding-software-development"
    ]
  },
  {
    "role": "API Design Architect.",
    "objective": "Outline RESTful API endpoints for managing **{resource}** including HTTP verbs, sample request/response JSON, and authentication scheme.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{resource}"
    ],
    "tags": [
      "coding-software-development"
    ]
  },
  {
    "role": "SQL Query Crafter.",
    "objective": "CONSIDER: indexing, CTEs, and execution plan hints.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{business_question}",
      "{tables_involved}"
    ],
    "tags": [
      "coding-software-development"
    ]
  },
  {
    "role": "Code Documentation Generator.",
    "objective": "Generate docstrings for module **{module_name}** following Google style with parameter, return, and example sections.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{module_name}"
    ],
    "tags": [
      "coding-software-development"
    ]
  },
  {
    "role": "Model Selection Advisor.",
    "objective": "Recommend top 3 ML models for predicting **{target}** given features **{feature_list}**, citing pros/cons and interpretability.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{feature_list}",
      "{target}"
    ],
    "tags": [
      "data-analysis-visualization"
    ]
  },
  {
    "role": "Metric Dashboard SQL Engineer.",
    "objective": "CONSIDER: efficient window functions.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{dimension}",
      "{metric}"
    ],
    "tags": [
      "data-analysis-visualization"
    ]
  },
  {
    "role": "Data Story Narrator.",
    "objective": "Compose a 500\u2011word narrative weaving together three insights from **{analysis_summary}** for an internal newsletter.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{analysis_summary}"
    ],
    "tags": [
      "data-analysis-visualization"
    ]
  },
  {
    "role": "Feature Importance Explainer.",
    "objective": "Summarize SHAP values output **{shap_output}** into plain\u2011language insights and next\u2011step recommendations.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{shap_output}"
    ],
    "tags": [
      "data-analysis-visualization"
    ]
  },
  {
    "role": "Confusion Matrix Interpreter.",
    "objective": "Explain confusion matrix **{matrix_values}** for stakeholders focusing on precision, recall, and business impact.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{matrix_values}"
    ],
    "tags": [
      "data-analysis-visualization"
    ]
  },
  {
    "role": "Visualization Storyboarder.",
    "objective": "SPECIFY: chart types, key message of each, and sequencing rationale.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{insight}"
    ],
    "tags": [
      "data-analysis-visualization"
    ]
  },
  {
    "role": "Model Interpretability Strategist.",
    "objective": "Suggest methods to increase transparency of a random forest predicting **{outcome}**, including surrogate models and visualization.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{outcome}"
    ],
    "tags": [
      "data-analysis-visualization"
    ]
  },
  {
    "role": "Data Cleaning Pipeline Designer.",
    "objective": "Draft a Python pandas pipeline to handle missing and erroneous values in **{dataset_name}**, with code comments.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{dataset_name}"
    ],
    "tags": [
      "data-analysis-visualization"
    ]
  },
  {
    "role": "Exploratory Data Analyst.",
    "objective": "DELIVERABLE: Ordered task list with justification.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{dataset}"
    ],
    "tags": [
      "data-analysis-visualization"
    ]
  },
  {
    "role": "A/B Test Analyzer.",
    "objective": "Interpret experiment results **{ab_results}** computing lift, p\u2011value, and recommending rollout decision.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{ab_results}"
    ],
    "tags": [
      "data-analysis-visualization"
    ]
  },
  {
    "role": "SEO\u2011specialized Content Strategist.",
    "objective": "Produce a pillar blog post outline (minimum 3,000 words) on **{topic}** targeting **{persona}** that will rank top\u20113 for the keyword cluster **{keyword_cluster}**.",
    "requirements": [
      "Identify 8 sub\u2011topics mapped to search intent stages (TOFU, MOFU, BOFU).",
      "Provide suggested word counts, keyword density (%), and internal link anchors.",
      "Recommend one interactive element (quiz, calculator, visualization) to improve dwell time."
    ],
    "output_format": "Markdown table.",
    "placeholders": [
      "{keyword_cluster}",
      "{persona}",
      "{topic}"
    ],
    "tags": [
      "content-writing-blogging"
    ]
  },
  {
    "role": "Blog Post Outliner",
    "objective": "Create a detailed outline for a blog post based on the given {topic} and {key_points}.",
    "requirements": [
      "Include an introduction, main sections with sub-points, and a conclusion.",
      "Use clear, descriptive headings.",
      "Ensure logical flow and comprehensive coverage of the topic."
    ],
    "placeholders": [
      "{topic}",
      "{key_points}"
    ],
    "output_format": "Markdown outline with headings and bullet points."
  },
  {
    "role": "Social Media Tone Adapter.",
    "objective": "GUIDELINES: \u2022 Twitter: 2\u2011tweet thread, each \u2264260 chars, includes a statistic and a question. \u2022 LinkedIn: 120\u2011word mini\u2011essay, uses storytelling CTA. \u2022 Instagram: Caption \u2264150 words plus 3 hashtag suggestions. Ensure brand voice consistency and add an emoji only on Instagram.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{paragraph}"
    ],
    "tags": [
      "content-writing-blogging"
    ]
  },
  {
    "role": "Newsletter Ghostwriter.",
    "objective": "Draft a 400\u2011word weekly digest for **{brand}** summarizing the three most impactful events in **{sector}**.",
    "requirements": [
      "Begin with a 30\u2011word hook.",
      "For each event: include a one\u2011sentence TL;DR, two bullet insights, and an 'Why it matters' line.",
      "Use a friendly but data\u2011driven tone."
    ],
    "output_format": "Plain text, ready to paste into Mailchimp.",
    "placeholders": [
      "{brand}",
      "{sector}"
    ],
    "tags": [
      "content-writing-blogging"
    ]
  },
  {
    "role": "Blog Post Idea Generator",
    "objective": "Generate a list of compelling blog post ideas for {topic} targeting {audience}.",
    "requirements": [
      "Provide at least 5 unique ideas.",
      "Each idea should include a catchy title and a brief, one-sentence description.",
      "Ideas should be optimized for SEO and audience engagement."
    ],
    "placeholders": [
      "{topic}",
      "{audience}"
    ],
    "output_format": "Markdown list."
  },
  {
    "role": "Brand Storytelling Architect.",
    "objective": "STRUCTURE PER EMAIL: 1\ufe0f\u20e3 Subject line (<45 chars, Title Case) 2\ufe0f\u20e3 Opening hook (\u226430 words) 3\ufe0f\u20e3 Story segment employing the Hero's Journey framework 4\ufe0f\u20e3 CTA with urgency cue. Ensure cohesion across emails and measurable progression of reader commitment (curiosity \u2192 desire \u2192 action).",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{product}"
    ],
    "tags": [
      "content-writing-blogging"
    ]
  },
  {
    "role": "Veteran Tech Opinion Columnist.",
    "objective": "Craft a 1,200\u2011word editorial on **{topic}** for **{publication}** that translates complex AI developments into layman's terms while maintaining expert depth.",
    "requirements": [
      "Integrate perspectives of three stakeholders (regulators, industry leaders, everyday users).",
      "Include one storytelling anecdote illustrating real\u2011world impact.",
      "Conclude with two evidence\u2011based forecasts for the next 18 months.",
      "STYLE: Authoritative yet conversational, active voice, AP style."
    ],
    "output_format": "Markdown with H2 headers (Background | Stakeholder Insights | Forecasts | Takeaways).",
    "placeholders": [
      "{publication}",
      "{topic}"
    ],
    "tags": [
      "content-writing-blogging"
    ]
  },
  {
    "role": "Expert Interview Prep Assistant.",
    "objective": "Generate 12 probing interview questions for **{expert_role}** on **{topic}**.",
    "requirements": [
      "Balance 4 strategic, 4 operational, 4 personal perspective questions.",
      "Each question \u226420 words, avoids yes/no wording.",
      "Include a one\u2011sentence rationale for each question."
    ],
    "output_format": null,
    "placeholders": [
      "{expert_role}",
      "{topic}"
    ],
    "tags": [
      "content-writing-blogging"
    ]
  },
  {
    "role": "Blog SEO Auditor.",
    "objective": "TASKS: \u2022 List 5 highest\u2011value keyword gaps with search volume. \u2022 Rate title tag, meta description, H1\u2011H3 hierarchy, and internal links (score /10 each). \u2022 Suggest improvements with before/after snippets.",
    "requirements": null,
    "output_format": "Markdown checklist.",
    "placeholders": [
      "{url}"
    ],
    "tags": [
      "content-writing-blogging"
    ]
  },
  {
    "role": "Podcast Show Notes Producer.",
    "objective": "INCLUDE: \u2022 100\u2011word episode summary \u2022 Timestamped highlights (mm:ss \u2013 key takeaway) at 2\u2011minute granularity \u2022 Guest bio (50 words) and two social links \u2022 Three pull\u2011quotes formatted for Twitter",
    "requirements": null,
    "output_format": "Markdown.",
    "placeholders": [
      "{episode_title}",
      "{guest_name}"
    ],
    "tags": [
      "content-writing-blogging"
    ]
  },
  {
    "role": "Fact\u2011Checker & Citation Assistant.",
    "objective": "Validate the factual claims in **{article_text}** and supply APA 7th citations for each.",
    "requirements": null,
    "output_format": "\u2022 Table: Claim | Verified/False | Source Title | Year | DOI/URL. \u2022 Summary paragraph noting any unsubstantiated statements.",
    "placeholders": [
      "{article_text}"
    ],
    "tags": [
      "content-writing-blogging"
    ]
  },
  {
    "role": "Conversion Copy Specialist.",
    "objective": "Rewrite the following landing\u2011page hero section **{text}** to achieve a Flesch Reading Ease > 60 and raise emotional appeal.",
    "requirements": [
      "Keep headline under 10 words, sub\u2011headline under 20.",
      "Incorporate a power verb and one specific benefit.",
      "METRICS: Provide original vs revised readability scores and headline emotional value score (EMV)."
    ],
    "output_format": "Table with Original | Revised | Metric Comparison.",
    "placeholders": [
      "{text}"
    ],
    "tags": [
      "content-writing-blogging"
    ]
  },
  {
    "role": "Social Media Post Generator",
    "objective": "Generate engaging social media posts for {platform} promoting {content_summary}.",
    "requirements": [
      "Create 3-5 distinct posts.",
      "Include relevant hashtags and emojis.",
      "Tailor the tone and length to the specified platform."
    ],
    "placeholders": [
      "{platform}",
      "{content_summary}"
    ],
    "output_format": "Markdown list of posts."
  },
  {
    "role": "Idea Brainstormer",
    "objective": "Generate a list of diverse and innovative ideas for {topic}.",
    "requirements": [
      "Provide at least 10 distinct ideas.",
      "Include a brief, one-sentence description for each idea.",
      "Categorize ideas if applicable."
    ],
    "placeholders": [
      "{topic}"
    ],
    "output_format": "Markdown list with bolded idea names."
  },
  {
    "role": "Competitive Landscape Mapper.",
    "objective": "Produce a competitor matrix comparing **{company}** to **{competitors}** across 5 critical dimensions (price, features, market share, funding, differentiation).",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{company}",
      "{competitors}"
    ],
    "tags": [
      "business-strategy-entrepreneurship"
    ]
  },
  {
    "role": "Business Model Canvas Coach.",
    "objective": "Draft a complete business model canvas for idea **{idea}**, including evidence\u2011based assumptions and risk rating.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{idea}"
    ],
    "tags": [
      "business-strategy-entrepreneurship"
    ]
  },
  {
    "role": "Revenue Stream Ideator.",
    "objective": "List at least 5 revenue streams for **{business_model}** estimating TAM, SAM, SOM for each.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{business_model}"
    ],
    "tags": [
      "business-strategy-entrepreneurship"
    ]
  },
  {
    "role": "Go\u2011To\u2011Market Planner.",
    "objective": "Map a 6\u2011month GTM plan for **{product}** in **{region}** detailing channels, KPIs, and resource allocation.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{product}",
      "{region}"
    ],
    "tags": [
      "business-strategy-entrepreneurship"
    ]
  },
  {
    "role": "OKR Facilitator.",
    "objective": "Draft OKRs for Q3 for team handling **{goal_area}**, including measurable key results and confidence ratings.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{goal_area}"
    ],
    "tags": [
      "business-strategy-entrepreneurship"
    ]
  },
  {
    "role": "Pitch Deck Content Advisor.",
    "objective": "Outline 10\u2011slide pitch deck for startup solving **{pain_point}** with **{solution}**, specifying key data points per slide.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{pain_point}",
      "{solution}"
    ],
    "tags": [
      "business-strategy-entrepreneurship"
    ]
  },
  {
    "role": "KPI Recommender.",
    "objective": "Suggest 5 KPIs to measure success of **{initiative}** with definition, formula, and target benchmark.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{initiative}"
    ],
    "tags": [
      "business-strategy-entrepreneurship"
    ]
  },
  {
    "role": "Pricing Strategist.",
    "objective": "Recommend three pricing tiers for SaaS **{product}** targeting **{segment}**, including feature bundling and psychological pricing cues.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{product}",
      "{segment}"
    ],
    "tags": [
      "business-strategy-entrepreneurship"
    ]
  },
  {
    "role": "Strategic Analyst.",
    "objective": "Compile a SWOT analysis for **{company}** entering **{market}** with emphasis on AI\u2011driven disruption factors.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{company}",
      "{market}"
    ],
    "tags": [
      "business-strategy-entrepreneurship"
    ]
  },
  {
    "role": "Partnership Proposal Writer.",
    "objective": "Draft an outreach email to **{partner_company}** proposing collaboration with clear mutual benefit and next steps.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{partner_company}"
    ],
    "tags": [
      "business-strategy-entrepreneurship"
    ]
  },
  {
    "role": "Back\u2011Cover Blurb Maker.",
    "objective": "Transform synopsis **{synopsis}** into a gripping 150\u2011word blurb with hook, stakes, and teaser question.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{synopsis}"
    ],
    "tags": [
      "creative-writing"
    ]
  },
  {
    "role": "Character Flaw Designer.",
    "objective": "Generate 3 deep internal conflicts for character **{character_name}** that align with the archetype **{archetype}** and drive plot tension.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{archetype}",
      "{character_name}"
    ],
    "tags": [
      "creative-writing"
    ]
  },
  {
    "role": "Scene Detail Enhancer.",
    "objective": "FOCUS: show, don\u2019t tell.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{setting_snippet}"
    ],
    "tags": [
      "creative-writing"
    ]
  },
  {
    "role": "Imaginary City Builder.",
    "objective": "Describe a fantastical city famed for **{unique_feature}** in 200 words, focusing on architecture, culture, and atmosphere.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{unique_feature}"
    ],
    "tags": [
      "creative-writing"
    ]
  },
  {
    "role": "Flash Fiction Generator.",
    "objective": "STYLE: minimalistic, strong final image.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{prompt}"
    ],
    "tags": [
      "creative-writing"
    ]
  },
  {
    "role": "Writing Prompt Curator.",
    "objective": "Provide 10 genre\u2011agnostic writing prompts around motif **{motif}**, each \u226425 words, designed to spark character\u2011driven stories.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{motif}"
    ],
    "tags": [
      "creative-writing"
    ]
  },
  {
    "role": "Poetry Form Coach.",
    "objective": "Compose a **{form}** poem on **{theme}** employing at least one example each of alliteration, enjambment, and internal rhyme.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{form}",
      "{theme}"
    ],
    "tags": [
      "creative-writing"
    ]
  },
  {
    "role": "Story Architect.",
    "objective": "INCLUDE: chapter titles, one\u2011sentence cliffhanger per chapter, and dominant theme. FRAMEWORK: Freytag\u2019s Pyramid.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{genre}",
      "{name}"
    ],
    "tags": [
      "creative-writing"
    ]
  },
  {
    "role": "Alternate Ending Visionary.",
    "objective": "Propose two alternative endings for the story scenario **{scenario}**, each \u2264250 words and exploring divergent themes.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{scenario}"
    ],
    "tags": [
      "creative-writing"
    ]
  },
  {
    "role": "Dialogue Rewriter.",
    "objective": "Rewrite the dialogue segment **{dialogue}** to heighten subtext and pacing while keeping word count \u00b110%.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{dialogue}"
    ],
    "tags": [
      "creative-writing"
    ]
  },
  {
    "role": "Differentiated Instruction Advisor.",
    "objective": "Suggest strategies for learners struggling with **{skill}** across visual, auditory, kinesthetic modalities.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{skill}"
    ],
    "tags": [
      "education-tutoring"
    ]
  },
  {
    "role": "Quiz Maker.",
    "objective": "Generate 10 multiple\u2011choice questions assessing **{concept}** with answers and brief explanations.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{concept}"
    ],
    "tags": [
      "education-tutoring"
    ]
  },
  {
    "role": "Rubric Creator.",
    "objective": "Create assessment rubric for project on **{topic}** at grade **{grade_level}** with 4 criteria and 4 proficiency levels.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{grade_level}",
      "{topic}"
    ],
    "tags": [
      "education-tutoring"
    ]
  },
  {
    "role": "Essay Feedback Generator.",
    "objective": "Provide feedback on student essay **{essay_text}** focusing on thesis clarity, evidence, and mechanics.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{essay_text}"
    ],
    "tags": [
      "education-tutoring"
    ]
  },
  {
    "role": "Socratic Seminar Questioner.",
    "objective": "Draft 8 open\u2011ended questions for **{literary_work}** connecting text to modern societal issues.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{literary_work}"
    ],
    "tags": [
      "education-tutoring"
    ]
  },
  {
    "role": "Interactive Activity Planner.",
    "objective": "Propose 3 interactive online activities to teach **{concept}**, specifying tools and engagement metric.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{concept}"
    ],
    "tags": [
      "education-tutoring"
    ]
  },
  {
    "role": "Study Guide Summarizer.",
    "objective": "Condense chapter **{chapter_text}** into a one\u2011page study guide with key terms, concepts, and memory hooks.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{chapter_text}"
    ],
    "tags": [
      "education-tutoring"
    ]
  },
  {
    "role": "Lesson Plan Designer.",
    "objective": "Create a 4\u2011week lesson plan to teach **{subject}** to **{level}** students incorporating Bloom\u2019s Taxonomy.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{level}",
      "{subject}"
    ],
    "tags": [
      "education-tutoring"
    ]
  },
  {
    "role": "Formative Assessment Designer.",
    "objective": "Design a formative assessment to gauge understanding of **{lesson_objective}** using exit tickets.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{lesson_objective}"
    ],
    "tags": [
      "education-tutoring"
    ]
  },
  {
    "role": "Concept Simplifier.",
    "objective": "Explain **{complex_concept}** to a 10\u2011year\u2011old using analogies and visuals description.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{complex_concept}"
    ],
    "tags": [
      "education-tutoring"
    ]
  },
  {
    "role": "Influencer Campaign Ideator.",
    "objective": "Propose 3 influencer collaboration concepts for **{brand}** on **{platform}**, including expected KPIs and creative brief.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{brand}",
      "{platform}"
    ],
    "tags": [
      "marketing-seo"
    ]
  },
  {
    "role": "Buyer Persona Developer.",
    "objective": "Build detailed persona for **{audience_segment}** interested in **{product}** including demographics, psychographics, and buying triggers.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{audience_segment}",
      "{product}"
    ],
    "tags": [
      "marketing-seo"
    ]
  },
  {
    "role": "Tagline Crafter.",
    "objective": "Invent a product tagline (<8 words) expressing **{value_prop}** using poetic devices (alliteration or rhyme).",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{value_prop}"
    ],
    "tags": [
      "marketing-seo"
    ]
  },
  {
    "role": "Google Ads Copywriter.",
    "objective": "Write 3 ad variants promoting **{product}** focusing on benefit **{key_benefit}** (headlines \u226430 chars, descriptions \u226490).",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{key_benefit}",
      "{product}"
    ],
    "tags": [
      "marketing-seo"
    ]
  },
  {
    "role": "A/B Test Strategist.",
    "objective": "Outline A/B test for landing page **{page_url}**; define hypothesis, variants, success metric, and sample size calculation.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{page_url}"
    ],
    "tags": [
      "marketing-seo"
    ]
  },
  {
    "role": "Keyword Research Analyst.",
    "objective": "Generate 20 long\u2011tail keywords around **{topic}** with search volume, CPC, and intent categorization.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{topic}"
    ],
    "tags": [
      "marketing-seo"
    ]
  },
  {
    "role": "Email Subject Line Generator.",
    "objective": "Craft 5 personalized subject lines for offer **{offer_name}**; each \u226450 characters, include dynamic token.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{offer_name}"
    ],
    "tags": [
      "marketing-seo"
    ]
  },
  {
    "role": "Email Drip Architect.",
    "objective": "Create 5\u2011email onboarding sequence for **{service}** increasing activation rate; specify trigger timings and SMART goal per email.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{service}"
    ],
    "tags": [
      "marketing-seo"
    ]
  },
  {
    "role": "Social Media Announcer.",
    "objective": "Compose a LinkedIn post announcing **{milestone}** in professional but engaging tone, \u2264120 words, include hashtag strategy.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{milestone}"
    ],
    "tags": [
      "marketing-seo"
    ]
  },
  {
    "role": "Content Calendar Planner.",
    "objective": "Build a 4\u2011week content calendar for **{brand}** with post topics, channels, target persona, and CTAs.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{brand}"
    ],
    "tags": [
      "marketing-seo"
    ]
  },
  {
    "role": "Brand Color Consultant.",
    "objective": "Recommend color palette for **{industry}** brand aiming to evoke **{emotion}**, with HEX codes and accessibility contrast ratio.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{emotion}",
      "{industry}"
    ],
    "tags": [
      "design-ux"
    ]
  },
  {
    "role": "UX Copywriter.",
    "objective": "Write signup form microcopy encouraging account creation on **{app}**, covering headline, placeholder, and error states.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{app}"
    ],
    "tags": [
      "design-ux"
    ]
  },
  {
    "role": "Persona Creator.",
    "objective": "Build primary user persona for **{product}** covering demographics, goals, pain points, and preferred devices.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{product}"
    ],
    "tags": [
      "design-ux"
    ]
  },
  {
    "role": "Design System Guide Writer.",
    "objective": "Write button component guidelines for **{framework}** design system including states, spacing, and naming convention.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{framework}"
    ],
    "tags": [
      "design-ux"
    ]
  },
  {
    "role": "User Journey Mapper.",
    "objective": "Outline 5 user journey stages for first\u2011time visitor to **{website}** including goals, emotions, and touchpoints.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{website}"
    ],
    "tags": [
      "design-ux"
    ]
  },
  {
    "role": "Heuristic Evaluator.",
    "objective": "Apply Nielsen heuristics to audit **{interface}**, scoring each criterion and summarizing top 3 issues.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{interface}"
    ],
    "tags": [
      "design-ux"
    ]
  },
  {
    "role": "Accessibility Auditor.",
    "objective": "Provide recommendations to improve contrast and navigability of **{page_url}** to meet WCAG 2.2 AA.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{page_url}"
    ],
    "tags": [
      "design-ux"
    ]
  },
  {
    "role": "Hero Section Copywriter.",
    "objective": "Craft hero headline and subheadline for landing page pursuing **{goal}**, headline <10 words, subheadline <20.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{goal}"
    ],
    "tags": [
      "design-ux"
    ]
  },
  {
    "role": "Micro\u2011interaction Designer.",
    "objective": "Suggest 3 delightful micro\u2011interactions for onboarding flow in **{app}** detailing trigger, feedback, and purpose.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{app}"
    ],
    "tags": [
      "design-ux"
    ]
  },
  {
    "role": "Usability Test Planner.",
    "objective": "Draft plan for testing **{feature}** with 5 participants, including tasks, success metrics, and post\u2011test interview script.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{feature}"
    ],
    "tags": [
      "design-ux"
    ]
  },
  {
    "role": "Research Question Generator",
    "objective": "Generate 3-5 novel and impactful research questions based on the provided {topic} and {key_findings}.",
    "requirements": [
      "Questions should be clear, focused, and answerable.",
      "Explore gaps in current research or new directions.",
      "Use a question mark at the end of each question."
    ],
    "placeholders": [
      "{topic}",
      "{key_findings}"
    ],
    "output_format": "Markdown list of questions."
  },
  {
    "role": "Paper Summarizer",
    "objective": "Provide a concise summary of the academic paper on {topic} focusing on its main arguments and conclusions.",
    "requirements": [
      "Summary should be no more than 200 words.",
      "Highlight the core methodology and key findings.",
      "Avoid jargon where possible."
    ],
    "placeholders": [
      "{topic}",
      "{paper_content}"
    ],
    "output_format": "Plain text summary."
  },
  {
    "role": "Key Findings Extractor",
    "objective": "Extract the most significant findings and their implications from the provided academic text on {topic}.",
    "requirements": [
      "List findings as bullet points.",
      "For each finding, briefly explain its implication.",
      "Focus on novel contributions and strong evidence."
    ],
    "placeholders": [
      "{topic}",
      "{academic_text}"
    ],
    "output_format": "Markdown list."
  },
  {
    "role": "Statistical Methodologist.",
    "objective": "INCLUDE: variable operationalization, suitable statistical tests (with assumptions), effect size metrics, and robustness checks.",
    "requirements": null,
    "output_format": "Markdown numbered list.",
    "placeholders": [
      "{dataset_description}",
      "{hypothesis}"
    ],
    "tags": [
      "academic-writing-research"
    ]
  },
  {
    "role": "Ethical Review Drafting Assistant.",
    "objective": "INCLUDE: consent procedure, risk mitigation, data privacy measures, and IRB compliance statement.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{methodology}",
      "{population}"
    ],
    "tags": [
      "academic-writing-research"
    ]
  },
  {
    "role": "Empirical Result Interpreter.",
    "objective": "FORMAT: Plain English summary, key takeaway bullets, and limitations.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{output_block}"
    ],
    "tags": [
      "academic-writing-research"
    ]
  },
  {
    "role": "Conference Abstract Rewriter.",
    "objective": "Condense **{long_abstract}** to 300 words without losing key findings and ensuring clear contribution statement.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{long_abstract}"
    ],
    "tags": [
      "academic-writing-research"
    ]
  },
  {
    "role": "Structured Abstract Composer.",
    "objective": "SECTIONS: Background | Methods | Results | Conclusion | Implications, each 2\u20113 sentences.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{study_title}"
    ],
    "tags": [
      "academic-writing-research"
    ]
  },
  {
    "role": "Literature Review Synthesizer.",
    "objective": "Create a thematic literature map for **{topic}** using sources post\u20112021 only.",
    "requirements": [
      "Group at least 12 studies into 3 themes; list citation details.",
      "Provide one consensus point and one controversy per theme.",
      "Visual output: ASCII mind map."
    ],
    "output_format": null,
    "placeholders": [
      "{topic}"
    ],
    "tags": [
      "academic-writing-research"
    ]
  },
  {
    "role": "Citation Style Converter.",
    "objective": "Transform bibliography entries **{references}** from APA 7th to Chicago\u2011Notes style.",
    "requirements": null,
    "output_format": "Numbered list.",
    "placeholders": [
      "{references}"
    ],
    "tags": [
      "academic-writing-research"
    ]
  },
  {
    "role": "Academic Paraphrase Checker.",
    "objective": "RETURN: Revised text + bullet note explaining changes (structure, synonyms, syntax).",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{paragraph}"
    ],
    "tags": [
      "academic-writing-research"
    ]
  },
  {
    "role": "Peer\u2011Review Critique Assistant.",
    "objective": "STRUCTURE: Major Comments (\u22653) | Minor Comments (\u22653) | Recommendation summary. TONE: Courteous, evidence\u2011backed.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{manuscript_text}"
    ],
    "tags": [
      "academic-writing-research"
    ]
  },
  {
    "role": "Graduate Thesis Mentor.",
    "objective": "INCLUDE: knowledge gap identification, theoretical framework (\u2264150 words), and testable hypothesis statement.",
    "requirements": null,
    "output_format": "Paragraph style.",
    "placeholders": [
      "{field}",
      "{topic}"
    ],
    "tags": [
      "academic-writing-research"
    ]
  },
  {
    "role": "Affirmation Scriptwriter.",
    "objective": "Write daily affirmation script targeting **{challenge}** using positive framing and visualization cues.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{challenge}"
    ],
    "tags": [
      "personal-productivity-life-planning"
    ]
  },
  {
    "role": "Budget Template Creator.",
    "objective": "Design monthly budget template to save **{amount}** while paying debt, includes income, fixed, variable, and sinking funds.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{amount}"
    ],
    "tags": [
      "personal-productivity-life-planning"
    ]
  },
  {
    "role": "Habit Coach.",
    "objective": "Suggest morning routine improving **{habit}** with stacking strategy, scientific rationale, and progress tracker.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{habit}"
    ],
    "tags": [
      "personal-productivity-life-planning"
    ]
  },
  {
    "role": "Anti\u2011Procrastination Coach.",
    "objective": "Provide techniques to overcome procrastination on **{task}** categorized by psychological trigger (fear, boredom, overwhelm).",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{task}"
    ],
    "tags": [
      "personal-productivity-life-planning"
    ]
  },
  {
    "role": "SMART Goal Setter.",
    "objective": "Formulate SMART goals for achieving **{objective}** within **{timeframe}**, including KPI and check\u2011in cadence.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{objective}",
      "{timeframe}"
    ],
    "tags": [
      "personal-productivity-life-planning"
    ]
  },
  {
    "role": "Productivity App Recommender.",
    "objective": "Suggest app stack based on **{preferences}** covering task management, note\u2011taking, and focus tracking.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{preferences}"
    ],
    "tags": [
      "personal-productivity-life-planning"
    ]
  },
  {
    "role": "Learning Roadmap Planner.",
    "objective": "Break down learning **{skill}** over 12 weeks: weekly milestones, resources, and assessment checkpoints.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{skill}"
    ],
    "tags": [
      "personal-productivity-life-planning"
    ]
  },
  {
    "role": "Accountability Contract Drafter.",
    "objective": "Create contract stating **{commitment}** with penalty, reward, and weekly review clause.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{commitment}"
    ],
    "tags": [
      "personal-productivity-life-planning"
    ]
  },
  {
    "role": "Schedule Optimizer.",
    "objective": "Build weekly schedule balancing **{tasks}** within 40 hours, incorporating Pomodoro blocks and buffer time.",
    "requirements": null,
    "output_format": null,
    "placeholders": [
      "{tasks}"
    ],
    "tags": [
      "personal-productivity-life-planning"
    ]
  },
  {
    "role": "Monthly Retrospective Template Maker.",
    "objective": "Design template to reflect on personal goals with sections: Wins, Challenges, Metrics, Actions.",
    "requirements": null,
    "output_format": null,
    "placeholders": [],
    "tags": [
      "personal-productivity-life-planning"
    ]
  }
]