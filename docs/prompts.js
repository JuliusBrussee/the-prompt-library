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
    "role": "Distributed ML Engineer.",
    "objective": "Set up Horovod training for **{model_arch}** on **{gpu_count}** GPUs across {node_count_dml} nodes.",
    "requirements": [
      "Demonstrate ring-allreduce efficiency measurement scripts.",
      "Tune batch size and gradient prefetch to maximize throughput.",
      "Provide TensorBoard screenshot placeholder."
    ],
    "output_format": "Markdown with commands and result metrics.",
    "placeholders": [
      "gpu_count",
      "model_arch",
      "node_count_dml"
    ],
    "tags": [
      "high-performance-computing-parallelization"
    ]
  },
  {
    "role": "OpenACC Refactoring Lead.",
    "objective": "Convert Fortran CFD solver loop **{source_file}** to OpenACC targeting **{gpu_model}**.",
    "requirements": [
      "Insert directives ensuring data movement minimized.",
      "Validate numerical results vs original CPU run within 1e-6 tolerance.",
      "Measure runtime reduction and document compiler flags."
    ],
    "output_format": "Markdown with code blocks and benchmark plot.",
    "placeholders": [
      "gpu_model",
      "source_file"
    ],
    "tags": [
      "high-performance-computing-parallelization"
    ]
  },
  {
    "role": "MPI Performance Tuner.",
    "objective": "Profile **{mpi_application}** scaling on **{cluster_name}** up to **{node_count}** nodes.",
    "requirements": [
      "Collect strong and weak scaling efficiency metrics.",
      "Visualize communication/computation breakdown using Imbalance chart.",
      "Recommend rank reordering and network topology mapping."
    ],
    "output_format": "Markdown with performance plots.",
    "placeholders": [
      "cluster_name",
      "mpi_application",
      "node_count"
    ],
    "tags": [
      "high-performance-computing-parallelization"
    ]
  },
  {
    "role": "Checkpointing Framework Designer.",
    "objective": "Design a scalable asynchronous checkpoint mechanism for **{simulation_code}** using SCR library.",
    "requirements": [
      "Set redundancy level to XOR with 3 partner ranks.",
      "Include restart latency measurement methodology.",
      "Provide I/O traces and explain overhead percentage."
    ],
    "output_format": "Markdown with configuration files and analysis.",
    "placeholders": [
      "simulation_code"
    ],
    "tags": [
      "high-performance-computing-parallelization"
    ]
  },
  {
    "role": "GPU Kernel Optimizer.",
    "objective": "Optimize CUDA kernel **{kernel_file}** for memory coalescing on **{gpu_arch}**.",
    "requirements": [
      "Use Nsight profiler to identify warp divergence hotspots.",
      "Apply shared memory tiling and unrolling factors.",
      "Report achieved occupancy and speedup vs baseline."
    ],
    "output_format": "Markdown with code diff and benchmark table.",
    "placeholders": [
      "gpu_arch",
      "kernel_file"
    ],
    "tags": [
      "high-performance-computing-parallelization"
    ]
  },
  {
    "role": "HPC Containerization Specialist.",
    "objective": "Build an Apptainer recipe for **{bioinformatics_pipeline}** with dependencies listed in **{conda_env_yml}**.",
    "requirements": [
      "Enable GPU support and MPI passthrough.",
      "Test container on {test_dataset} and report runtime comparison.",
      "Publish recipe hash and registration instructions."
    ],
    "output_format": "Markdown with recipe and results.",
    "placeholders": [
      "bioinformatics_pipeline",
      "conda_env_yml",
      "test_dataset"
    ],
    "tags": [
      "high-performance-computing-parallelization"
    ]
  },
  {
    "role": "Hybrid Parallelization Strategist.",
    "objective": "Outline MPI+OpenMP strategy to solve Poisson equation in **{mesh_size}** grid points.",
    "requirements": [
      "Describe domain decomposition and OpenMP collapse hints.",
      "Present pseudo-code and expected memory usage per rank.",
      "Compute roofline model estimate on {cpu_model}."
    ],
    "output_format": "Markdown with code and roofline chart.",
    "placeholders": [
      "cpu_model",
      "mesh_size"
    ],
    "tags": [
      "high-performance-computing-parallelization"
    ]
  },
  {
    "role": "Exascale Ready Auditor.",
    "objective": "Evaluate algorithmic readiness of **{application_name}** for exascale architectures with **{precision_mode}** precision.",
    "requirements": [
      "Analyze memory bandwidth requirements vs on-chip HBM limits.",
      "Identify synchronization hotspots and recommend task-based parallelism.",
      "Summarize compliance with OpenMP 5.2 features."
    ],
    "output_format": "Markdown with checklist and performance projections.",
    "placeholders": [
      "application_name",
      "precision_mode"
    ],
    "tags": [
      "high-performance-computing-parallelization"
    ]
  },
  {
    "role": "Slurm Scheduler Consultant.",
    "objective": "Design job submission strategy for parameter sweep **{job_script}** involving **{param_set_size}** combinations.",
    "requirements": [
      "Create array job script with dynamic CPU allocation per task.",
      "Implement dependency chain to post-process outputs.",
      "Estimate cluster utilization and makespan reduction."
    ],
    "output_format": "Markdown with script and Gantt chart placeholder.",
    "placeholders": [
      "job_script",
      "param_set_size"
    ],
    "tags": [
      "high-performance-computing-parallelization"
    ]
  },
  {
    "role": "HPC I/O Architect.",
    "objective": "Propose data layout strategy for writing **{simulation_output_tb}** TB per run to Lustre filesystem.",
    "requirements": [
      "Recommend MPI-IO collective buffer settings and stripe count.",
      "Include HDF5 chunk size optimization for {hdf5_dataset} dimensionality.",
      "Provide expected bandwidth and metadata overhead analysis."
    ],
    "output_format": "Markdown with tables and diagrams.",
    "placeholders": [
      "hdf5_dataset",
      "simulation_output_tb"
    ],
    "tags": [
      "high-performance-computing-parallelization"
    ]
  },
  {
    "role": "Sentence Variability Coach.",
    "objective": "Rewrite the paragraph **{paragraph}** to meet Hemingway grade-5 readability.",
    "requirements": [
      "Reduce adverbs by 80 %.",
      "Vary sentence length (8\u201320 words).",
      "Keep passive voice < 5 %."
    ],
    "output_format": "Plain text.",
    "placeholders": [
      "paragraph"
    ],
    "tags": [
      "content-writing-blogging"
    ]
  },
  {
    "role": "SEO-specialized Content Strategist.",
    "objective": "Produce a pillar blog post outline (minimum 3,000 words) for **{persona}** that will rank top-3 for the keyword cluster **{keyword_cluster}**.",
    "requirements": [
      "Identify 8 sub-topics mapped to search intent stages (TOFU, MOFU, BOFU).",
      "Provide suggested word counts, keyword density (%), and internal link anchors.",
      "Recommend one interactive element (quiz, calculator, visualization) to improve dwell time."
    ],
    "output_format": "Markdown table.",
    "placeholders": [
      "keyword_cluster",
      "persona"
    ],
    "tags": [
      "content-writing-blogging"
    ]
  },
  {
    "role": "Link-Building Outreach Drafter.",
    "objective": "Write a concise outreach email to secure a backlink from **{url}**.",
    "requirements": [
      "Email under 120 words.",
      "Personalize first sentence referencing a specific page on the site.",
      "Offer a mutually beneficial value proposition.",
      "STYLE: Polite, professional, and to-the-point."
    ],
    "output_format": "Plain text.",
    "placeholders": [
      "url"
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
    "objective": "Draft a witty, 400-word weekly newsletter for **{brand}** summarizing critical news in the **{sector}** sector.",
    "requirements": [
      "Open with a 25-word hook.",
      "Include 3 news blurbs with embedded links and 1 actionable takeaway each.",
      "Finish with a curated meme description.",
      "STYLE: Playfully professional, uses light humor and puns."
    ],
    "output_format": "Markdown with bullet sections.",
    "placeholders": [
      "brand",
      "sector"
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
    "objective": "Transform raw product specs for **{product}** into a compelling brand story.",
    "requirements": [
      "Craft a narrative arc with problem, solution, and transformation.",
      "Highlight 3 sensory details users will experience.",
      "Include one emotional quote from a hypothetical user.",
      "STYLE: Empathetic, aspirational, evokes vivid imagery."
    ],
    "output_format": "Markdown (Story | Key Specs | Emotional Hook).",
    "placeholders": [
      "product"
    ],
    "tags": [
      "content-writing-blogging"
    ]
  },
  {
    "role": "Fact-Check Annotator.",
    "objective": "Insert inline fact-check annotations into the following article text: **{article_text}**",
    "requirements": [
      "Highlight facts in bold; append annotation in brackets with source link.",
      "Do not alter original phrasing.",
      "Flag unverifiable claims with \u201csource needed\u201d."
    ],
    "output_format": "Markdown.",
    "placeholders": [
      "article_text"
    ],
    "tags": [
      "content-writing-blogging"
    ]
  },
  {
    "role": "Veteran Tech Opinion Columnist.",
    "objective": "Craft a 1,200-word editorial on **{topic}** for **{publication}** that translates deeply technical developments into layman's terms while maintaining expert depth.",
    "requirements": [
      "Integrate perspectives of three stakeholders (regulators, industry leaders, everyday users).",
      "Include one storytelling anecdote illustrating real-world impact.",
      "Conclude with two evidence-based forecasts for the next 18 months.",
      "STYLE: Authoritative yet conversational, active voice, AP style."
    ],
    "output_format": "Markdown with H2 headers (Background | Stakeholder Insights | Forecasts | Takeaways).",
    "placeholders": [
      "publication",
      "topic"
    ],
    "tags": [
      "content-writing-blogging"
    ]
  },
  {
    "role": "Expert Interviewer.",
    "objective": "Generate 7 probing questions for **{expert_role}** about **{topic}**.",
    "requirements": [
      "First two questions must build rapport.",
      "Last question should provoke future-looking insights.",
      "Keep each question \u2264 20 words."
    ],
    "output_format": "Numbered list.",
    "placeholders": [
      "expert_role",
      "topic"
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
    "role": "Podcast Show-Notes Producer.",
    "objective": "Draft show notes for episode **{episode_title}** featuring **{guest_name}**.",
    "requirements": [
      "Craft a 150-word episode summary.",
      "List 5 key takeaways.",
      "Provide 3 resource links mentioned by the guest.",
      "STYLE: Friendly and curiosity-driven."
    ],
    "output_format": "Markdown.",
    "placeholders": [
      "episode_title",
      "guest_name"
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
    "objective": "Rewrite the following paragraph so that it boosts click-through by at least 20 %: **{text}**",
    "requirements": [
      "Keep it under 60 words total.",
      "Integrate one psychological trigger (scarcity, authority, or social proof).",
      "End with a single crisp CTA.",
      "STYLE: Direct-response tone, 2nd-person \u201cyou\u201d."
    ],
    "output_format": "Plain text.",
    "placeholders": [
      "text"
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
    "role": "Protein Engineering Specialist.",
    "objective": "Plan a site-saturation mutagenesis library for **{protein_pdb}** at positions **{residue_range}**.",
    "requirements": [
      "Use degenerate codon scheme minimizing stop codons.",
      "Provide primer sequences with Tm within \u00b12 \u00b0C of 60 \u00b0C.",
      "Estimate library size and sequencing depth coverage."
    ],
    "output_format": "Markdown with primer table.",
    "placeholders": [
      "protein_pdb",
      "residue_range"
    ],
    "tags": [
      "synthetic-biology-gene-editing"
    ]
  },
  {
    "role": "Cell-Free Expression Optimizer.",
    "objective": "Outline a DoE matrix to maximize **{protein_name}** yield in TX-TL using **{lysate_type}**.",
    "requirements": [
      "Choose 3 factors: Mg2+, energy mix, DNA concentration with 3 levels each.",
      "Include randomization plan and replication strategy.",
      "Provide R script to analyze ANOVA results."
    ],
    "output_format": "Markdown with R code block.",
    "placeholders": [
      "lysate_type",
      "protein_name"
    ],
    "tags": [
      "synthetic-biology-gene-editing"
    ]
  },
  {
    "role": "Biosensor Circuit Designer.",
    "objective": "Develop a quorum-sensing biosensor for **{analyte_name}** detection range **{detection_ppm}** ppm.",
    "requirements": [
      "Select input promoter responsive to analyte and LuxR-based amplifier.",
      "Simulate dose-response using {simulation_tool}.",
      "Output transfer function plot and ON/OFF ratio."
    ],
    "output_format": "Markdown with plots and SBML snippet.",
    "placeholders": [
      "analyte_name",
      "detection_ppm",
      "simulation_tool"
    ],
    "tags": [
      "synthetic-biology-gene-editing"
    ]
  },
  {
    "role": "CRISPR gRNA Designer.",
    "objective": "Generate optimal sgRNA sequences targeting **{gene_symbol}** exon **{exon_number}** in **{organism_name}**.",
    "requirements": [
      "Avoid off-targets with fewer than 4 mismatches across genome build {genome_build}.",
      "Score guides using Rule Set 2 and CFD scores.",
      "Provide CSV with PAM sequence, GC content, and predicted efficiency."
    ],
    "output_format": "Markdown with CSV code block.",
    "placeholders": [
      "exon_number",
      "gene_symbol",
      "genome_build",
      "organism_name"
    ],
    "tags": [
      "synthetic-biology-gene-editing"
    ]
  },
  {
    "role": "Epigenome Editor Planner.",
    "objective": "Propose dCas-KRAB-MeCP2 construct targeting **{enhancer_region}** to silence **{oncogene_name}**.",
    "requirements": [
      "Design gRNAs avoiding CpG islands using {crispr_tool}.",
      "Assess off-target chromatin marks via ChIP-seq datasets.",
      "Outline lentiviral delivery protocol and controls."
    ],
    "output_format": "Markdown with table and protocol steps.",
    "placeholders": [
      "crispr_tool",
      "enhancer_region",
      "oncogene_name"
    ],
    "tags": [
      "synthetic-biology-gene-editing"
    ]
  },
  {
    "role": "Optogenetic Tool Developer.",
    "objective": "Design an optogenetic switch controlling **{target_gene}** expression in **{cell_line}** using **{light_wavelength}** nm LED.",
    "requirements": [
      "Choose LOV vs CRY2 photosensor comparison with response curves.",
      "Simulate activation kinetics in {modeling_software}.",
      "Include cloning strategy and plasmid map features."
    ],
    "output_format": "Markdown with diagrams and SBOL snippet.",
    "placeholders": [
      "cell_line",
      "light_wavelength",
      "modeling_software",
      "target_gene"
    ],
    "tags": [
      "synthetic-biology-gene-editing"
    ]
  },
  {
    "role": "Synthetic Promoter Miner.",
    "objective": "Identify de-novo promoters in **{rna_seq_dataset}** for **{tissue_type}** under stress **{stress_condition}**.",
    "requirements": [
      "Use differential expression threshold log2FC > 2 and FDR < 0.01.",
      "Predict promoter regions upstream \u2212400 bp to +50 bp.",
      "Output FASTA file and motif logo."
    ],
    "output_format": "Markdown with FASTA block.",
    "placeholders": [
      "rna_seq_dataset",
      "stress_condition",
      "tissue_type"
    ],
    "tags": [
      "synthetic-biology-gene-editing"
    ]
  },
  {
    "role": "Gene Drive Risk Assessor.",
    "objective": "Evaluate containment strategies for CRISPR gene drive in **{target_species}** release scenario **{release_scenario}**.",
    "requirements": [
      "Model allelic frequency spread using {population_model} over 10 generations.",
      "Assess ecological impact metrics and mitigation measures.",
      "Summarize risk matrix with likelihood vs consequence."
    ],
    "output_format": "Markdown with model equations and tables.",
    "placeholders": [
      "population_model",
      "release_scenario",
      "target_species"
    ],
    "tags": [
      "synthetic-biology-gene-editing"
    ]
  },
  {
    "role": "Metabolic Pathway Engineer.",
    "objective": "Design a synthetic operon to overproduce **{target_metabolite}** in **{microbe_species}**.",
    "requirements": [
      "Select promoters and RBS parts from {parts_registry} to balance flux.",
      "Provide SBOL XML snippet.",
      "Include flux balance analysis predicting yield improvement."
    ],
    "output_format": "Markdown with SBOL code and tables.",
    "placeholders": [
      "microbe_species",
      "parts_registry",
      "target_metabolite"
    ],
    "tags": [
      "synthetic-biology-gene-editing"
    ]
  },
  {
    "role": "Genome-Scale Model Curator.",
    "objective": "Update GEM for **{organism_strain}** with new reaction **{reaction_id}** kinetics parameters.",
    "requirements": [
      "Validate mass balance and charge using COBRApy.",
      "Provide SBML diff and MEMOTE score delta.",
      "Run FBA to confirm growth phenotype unchanged."
    ],
    "output_format": "Markdown with code and result summary.",
    "placeholders": [
      "organism_strain",
      "reaction_id"
    ],
    "tags": [
      "synthetic-biology-gene-editing"
    ]
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
    "role": "Cloud Security Architect.",
    "objective": "Generate Terraform guardrails for **{cloud_provider}** to enforce encryption-at-rest on **{service_name}**.",
    "requirements": [
      "Include policy as code OPA/Rego snippet.",
      "Add remediation actions with automated tagging.",
      "Document unit tests using Terratest."
    ],
    "output_format": "Markdown with code fences.",
    "placeholders": [
      "cloud_provider",
      "service_name"
    ],
    "tags": [
      "cybersecurity-threat-intelligence"
    ]
  },
  {
    "role": "Security Data Lake Builder.",
    "objective": "Create an OpenSearch index policy to retain **{log_type}** logs for **{retention_days}** days with ILM rollover.",
    "requirements": [
      "Provide index template with mapping for ECS fields.",
      "Include curator job YAML for snapshot to {s3_bucket}.",
      "Describe alerting integration with PagerDuty."
    ],
    "output_format": "Markdown with YAML blocks.",
    "placeholders": [
      "log_type",
      "retention_days",
      "s3_bucket"
    ],
    "tags": [
      "cybersecurity-threat-intelligence"
    ]
  },
  {
    "role": "Digital Forensics Analyst.",
    "objective": "Plan a timeline analysis of disk image **{evidence_image}** focusing on **{compromise_window}**.",
    "requirements": [
      "Use fls-bodyfile to extract file system event records.",
      "Correlate with $MFT and USN journal artifacts.",
      "Present results in a Gantt-style diagram."
    ],
    "output_format": "Markdown report with timeline CSV attachment.",
    "placeholders": [
      "compromise_window",
      "evidence_image"
    ],
    "tags": [
      "cybersecurity-threat-intelligence"
    ]
  },
  {
    "role": "Incident Response Playbook Author.",
    "objective": "Create a playbook for ransomware **{malware_family}** infiltration in **{environment_type}**.",
    "requirements": [
      "Map actions to NIST IR phases: Preparation, Identification, Containment, Eradication, Recovery.",
      "Include command references for {edr_tool} and SOAR automation snippets.",
      "Specify KPIs and timeframes for each phase."
    ],
    "output_format": "Markdown with tables and code blocks.",
    "placeholders": [
      "edr_tool",
      "environment_type",
      "malware_family"
    ],
    "tags": [
      "cybersecurity-threat-intelligence"
    ]
  },
  {
    "role": "ICS Security Engineer.",
    "objective": "Design a network segmentation scheme for **{scada_vendor}** PLCs controlling **{process_name}**.",
    "requirements": [
      "Specify Purdue Model zones and conduits.",
      "Include firewall ACL examples for {firewall_model}.",
      "Document latency impact and redundancy considerations."
    ],
    "output_format": "Markdown architecture diagram placeholders.",
    "placeholders": [
      "firewall_model",
      "process_name",
      "scada_vendor"
    ],
    "tags": [
      "cybersecurity-threat-intelligence"
    ]
  },
  {
    "role": "Penetration Testing Planner.",
    "objective": "Draft an engagement plan to test **{webapp_name}** for **{owasp_category}** vulnerabilities in **{testing_window}**.",
    "requirements": [
      "Define in-scope endpoints and excluded assets.",
      "Provide Burp Suite and OWASP ZAP plugin configurations.",
      "Include risk rating matrix aligned with CVSS 4.0."
    ],
    "output_format": "Markdown with tables and checklist.",
    "placeholders": [
      "owasp_category",
      "testing_window",
      "webapp_name"
    ],
    "tags": [
      "cybersecurity-threat-intelligence"
    ]
  },
  {
    "role": "Reverse Engineering Mentor.",
    "objective": "Outline a Ghidra project walkthrough to unpack **{packed_binary}** using **{packer_type}**.",
    "requirements": [
      "Identify anti-debugging tricks and bypass methods.",
      "Provide step-by-step screenshots placeholders and script snippets.",
      "Generate IOC list (hashes, strings, C2 domains)."
    ],
    "output_format": "Markdown lab guide.",
    "placeholders": [
      "packed_binary",
      "packer_type"
    ],
    "tags": [
      "cybersecurity-threat-intelligence"
    ]
  },
  {
    "role": "Threat Intelligence Correlator.",
    "objective": "Compile a STIX 2.1 bundle linking **{actor_name}** campaigns with **{malware_ids}**.",
    "requirements": [
      "Include attack patterns, infrastructure, and victims objects.",
      "Ensure relationship object types are correctly typed and dated.",
      "Export JSON file validated against Oasis schema."
    ],
    "output_format": "JSON plus Markdown summary.",
    "placeholders": [
      "actor_name",
      "malware_ids"
    ],
    "tags": [
      "cybersecurity-threat-intelligence"
    ]
  },
  {
    "role": "Threat Hunting Query Designer.",
    "objective": "Draft Sigma rules to detect **{tactic_name}** in Windows Event Logs with IDs **{event_ids}**.",
    "requirements": [
      "Provide at least 3 variations to reduce FPs in legacy systems.",
      "Include mapping to ATT&CK technique ID.",
      "Offer Splunk and Elastic translations."
    ],
    "output_format": "YAML with accompanying Markdown explanation.",
    "placeholders": [
      "event_ids",
      "tactic_name"
    ],
    "tags": [
      "cybersecurity-threat-intelligence"
    ]
  },
  {
    "role": "Zero Trust Strategist.",
    "objective": "Develop an identity-centric zero trust roadmap for **{enterprise_size}** employee organization migrating to **{idp_name}**.",
    "requirements": [
      "Define phases: discovery, pilot, rollout with milestones.",
      "Map NIST 800-207 pillars to {existing_arch_diagram}.",
      "Quantify expected MFA adoption rate and risk reduction."
    ],
    "output_format": "Markdown with timeline diagram placeholders.",
    "placeholders": [
      "enterprise_size",
      "existing_arch_diagram",
      "idp_name"
    ],
    "tags": [
      "cybersecurity-threat-intelligence"
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
    "role": "CFD Uncertainty Quantification Lead.",
    "objective": "Set up a polynomial chaos expansion analysis on lift coefficient of **{wing_config}** varying AoA \u00b1 **{aoa_variation}**\u00b0.",
    "requirements": [
      "Use non-intrusive spectral projection with 3rd-order Legendre polynomials.",
      "Generate CFD samples using {workflow_manager}.",
      "Report Sobol indices and confidence intervals."
    ],
    "output_format": "Markdown with statistical result tables.",
    "placeholders": [
      "aoa_variation",
      "wing_config",
      "workflow_manager"
    ],
    "tags": [
      "computational-fluid-dynamics"
    ]
  },
  {
    "role": "Multiphase CFD Engineer.",
    "objective": "Set up a VOF simulation of **{bubble_diameter}** mm air bubble rising in water column using **{openfoam_case}**.",
    "requirements": [
      "Define phaseProperties and alpha.water fields with initial bubble region.",
      "Implement PIMPLE algorithm with Courant < 0.3.",
      "Capture bubble centroid trajectory and terminal velocity."
    ],
    "output_format": "Markdown with OpenFOAM dict excerpts.",
    "placeholders": [
      "bubble_diameter",
      "openfoam_case"
    ],
    "tags": [
      "computational-fluid-dynamics"
    ]
  },
  {
    "role": "Thermal Comfort Simulator.",
    "objective": "Create CFD simulation predicting PMV for **{room_geometry}** under **{hvac_setting}** conditions.",
    "requirements": [
      "Couple radiation model with SST k-\u03c9 turbulence.",
      "Include human body heat flux as boundary condition using {met_rate} met.",
      "Compare predicted PMV with ASHRAE acceptable range."
    ],
    "output_format": "Markdown with section headers and plots.",
    "placeholders": [
      "hvac_setting",
      "met_rate",
      "room_geometry"
    ],
    "tags": [
      "computational-fluid-dynamics"
    ]
  },
  {
    "role": "Porous Media CFD Expert.",
    "objective": "Implement Darcy-Forchheimer source term in **{solver_name}** for flow through **{foam_material}** core.",
    "requirements": [
      "Calibrate permeability and inertial coefficient from {pressure_drop_csv}.",
      "Validate velocity profile against ERCOFTAC benchmark.",
      "Include script for automated mesh sensitivity study."
    ],
    "output_format": "Markdown with equations and validation plots.",
    "placeholders": [
      "foam_material",
      "pressure_drop_csv",
      "solver_name"
    ],
    "tags": [
      "computational-fluid-dynamics"
    ]
  },
  {
    "role": "Battery Thermal CFD Specialist.",
    "objective": "Develop a conjugate heat transfer model of **{battery_pack}** during fast charging at **{charge_rate}** C.",
    "requirements": [
      "Use anisotropic thermal conductivity for cell jelly-roll.",
      "Implement joule heating source term and coolant flow channel.",
      "Report maximum cell temperature and temperature homogeneity index."
    ],
    "output_format": "Markdown; include simulation setup table.",
    "placeholders": [
      "battery_pack",
      "charge_rate"
    ],
    "tags": [
      "computational-fluid-dynamics"
    ]
  },
  {
    "role": "LES Turbulence Modeler.",
    "objective": "Configure a WALE sub-grid LES simulation in **{cfd_solver}** for flow over **{airfoil_name}** at Re={reynolds_number}.",
    "requirements": [
      "Generate structured mesh with y+ < 1 using {mesher_tool}.",
      "Provide boundary conditions and time-step size for CFL < 0.5.",
      "Output Cp distribution and compare with experimental data from NACA database."
    ],
    "output_format": "Markdown with code snippets and result charts.",
    "placeholders": [
      "airfoil_name",
      "cfd_solver",
      "mesher_tool",
      "reynolds_number"
    ],
    "tags": [
      "computational-fluid-dynamics"
    ]
  },
  {
    "role": "GPU CFD Accelerator.",
    "objective": "Port pressure-Poisson solver of **{openfoam_version}** to CUDA using **{gpu_library}**.",
    "requirements": [
      "Provide profiling results identifying memory bottlenecks.",
      "Rewrite matrix-vector multiplication kernel using CSR format.",
      "Benchmark speedup against CPU on mesh with 10 M cells."
    ],
    "output_format": "Markdown with code diff and benchmark chart.",
    "placeholders": [
      "gpu_library",
      "openfoam_version"
    ],
    "tags": [
      "computational-fluid-dynamics"
    ]
  },
  {
    "role": "Wind Farm CFD Analyst.",
    "objective": "Model wake interaction of **{turbine_layout}** using actuator disk in **{fluid_solver}**.",
    "requirements": [
      "Set inflow turbulence intensity and TI profile based on {liDAR_csv}.",
      "Run simulation for 10 min physical time with time-averaged outputs.",
      "Report power deficit and turbulence kinetic energy maps."
    ],
    "output_format": "Markdown report with figures and tables.",
    "placeholders": [
      "fluid_solver",
      "liDAR_csv",
      "turbine_layout"
    ],
    "tags": [
      "computational-fluid-dynamics"
    ]
  },
  {
    "role": "Compressible Solver Developer.",
    "objective": "Draft an equation derivation and discretization note for implementing AUSM+-up in **{code_base}**.",
    "requirements": [
      "Include finite-volume formulation on unstructured meshes.",
      "Provide pseudocode for flux calculation and eigenvalue evaluation.",
      "Discuss stability criteria for transonic nozzle flow."
    ],
    "output_format": "LaTeX technical note.",
    "placeholders": [
      "code_base"
    ],
    "tags": [
      "computational-fluid-dynamics"
    ]
  },
  {
    "role": "Aeroacoustics Analyst.",
    "objective": "Compute sound pressure level from LES data of **{fan_blade_design}** using FWH acoustic analogy.",
    "requirements": [
      "Sample pressure on permeable surface grid exported from {post_processing_tool}.",
      "Post-process frequency spectrum up to 10 kHz.",
      "Compare predicted tonal peaks against wind-tunnel microphone array."
    ],
    "output_format": "Markdown with code snippets and results plots.",
    "placeholders": [
      "fan_blade_design",
      "post_processing_tool"
    ],
    "tags": [
      "computational-fluid-dynamics"
    ]
  },
  {
    "role": "Quantum Monte Carlo Analyst.",
    "objective": "Design a VMC study of 2-D Hubbard model at **{filling_factor}** using **{ansatz_type}** wavefunction.",
    "requirements": [
      "Specify lattice size, boundary conditions, and J/t values.",
      "Provide pseudocode for Metropolis sampling with sign problem mitigation.",
      "Report expected energy convergence criteria and runtime estimates."
    ],
    "output_format": "Markdown report with code blocks and math formulae.",
    "placeholders": [
      "ansatz_type",
      "filling_factor"
    ],
    "tags": [
      "quantum-computing-simulation"
    ]
  },
  {
    "role": "Quantum Networking Protocol Engineer.",
    "objective": "Draft an entanglement swapping protocol spec for nodes **{node_count}** over **{fiber_length}** km with {bell_measurement} measurements.",
    "requirements": [
      "Describe timing synchronization requirements to sub-nanosecond accuracy.",
      "Provide NS-3 simulation configuration snippet.",
      "List security vulnerabilities and mitigation controls."
    ],
    "output_format": "RFC-style Markdown.",
    "placeholders": [
      "bell_measurement",
      "fiber_length",
      "node_count"
    ],
    "tags": [
      "quantum-computing-simulation"
    ]
  },
  {
    "role": "Quantum Error Mitigation Specialist.",
    "objective": "Draft a detailed protocol to apply zero-noise extrapolation on raw counts from **{qubit_device}** running **{circuit_name}**.",
    "requirements": [
      "Include calibrated gate error rates and readout assignment matrices from {qubit_device}.",
      "Provide Python code using the {sdk} SDK that implements noise scaling and Richardson extrapolation.",
      "Summarize expected fidelity gains in a table comparing baseline vs mitigated results."
    ],
    "output_format": "Markdown with H2 headers (Background | Code | Results).",
    "placeholders": [
      "circuit_name",
      "qubit_device",
      "sdk"
    ],
    "tags": [
      "quantum-computing-simulation"
    ]
  },
  {
    "role": "NISQ Benchmark Designer.",
    "objective": "Create a benchmark suite to evaluate coherence-limited performance of **{hardware_series}** across varying circuit widths.",
    "requirements": [
      "Select 4 representative algorithms (QFT, Grover, VQE, GHZ) with parameterized depths.",
      "Provide YAML spec describing each job submission via {api_endpoint}.",
      "Define KPIs: average EPG, SPAM error, and circuit success rate."
    ],
    "output_format": "Markdown with YAML code blocks.",
    "placeholders": [
      "api_endpoint",
      "hardware_series"
    ],
    "tags": [
      "quantum-computing-simulation"
    ]
  },
  {
    "role": "Quantum Error Correction Simulator.",
    "objective": "Setup a surface-code simulation for **{code_distance}** distance using **{noise_model}** in Stim.",
    "requirements": [
      "Show logical error rate vs physical error probability curve (log-log).",
      "Include Python snippet to generate lattice and match syndrome.",
      "Discuss thresholds relative to current NV-center qubits."
    ],
    "output_format": "Markdown plus matplotlib figure placeholder.",
    "placeholders": [
      "code_distance",
      "noise_model"
    ],
    "tags": [
      "quantum-computing-simulation"
    ]
  },
  {
    "role": "Quantum Finance Strategist.",
    "objective": "Propose a quantum amplitude estimation workflow for pricing **{exotic_option}** using **{oracle_type}** oracle.",
    "requirements": [
      "Derive analytic payoff function and encode in controlled unitary.",
      "Estimate required number of evals to reach 1 % error with 95 % confidence.",
      "Provide Qiskit code and classical baseline comparison."
    ],
    "output_format": "Markdown with equations and code sections.",
    "placeholders": [
      "exotic_option",
      "oracle_type"
    ],
    "tags": [
      "quantum-computing-simulation"
    ]
  },
  {
    "role": "Quantum Compiler Optimizer.",
    "objective": "Generate an optimized QASM for **{algorithm}** targeting **{target_hardware}** minimizing two-qubit gate depth.",
    "requirements": [
      "Use ZX-calculus transformations to reduce CNOT count by at least 30 %.",
      "Annotate each optimization pass with before-after gate counts.",
      "Provide final circuit diagram in ASCII and OpenQASM code."
    ],
    "output_format": "Markdown; separate code blocks for QASM and diagrams.",
    "placeholders": [
      "algorithm",
      "target_hardware"
    ],
    "tags": [
      "quantum-computing-simulation"
    ]
  },
  {
    "role": "Quantum Machine Learning Engineer.",
    "objective": "Outline a hybrid classifier combining QSVC on **{backend_name}** with classical SVM for **{dataset_name}**.",
    "requirements": [
      "Detail feature map encoding and circuit depth budget (< 60 gates).",
      "Include training loop in {ml_framework} integrating qiskit-runtime.",
      "Plot decision boundary and report balanced accuracy."
    ],
    "output_format": "Jupyter-ready Markdown.",
    "placeholders": [
      "backend_name",
      "dataset_name",
      "ml_framework"
    ],
    "tags": [
      "quantum-computing-simulation"
    ]
  },
  {
    "role": "Quantum Metrology Architect.",
    "objective": "Design a Ramsey interference experiment achieving Heisenberg-limited scaling on **{sensor_platform}** for frequency **{target_frequency}**.",
    "requirements": [
      "Specify pulse sequence and optimal interrogation time.",
      "Include error sources and their mitigation strategies in table.",
      "Predict SNR improvement factor over SQL baselines."
    ],
    "output_format": "Markdown report with schematic SVG reference.",
    "placeholders": [
      "sensor_platform",
      "target_frequency"
    ],
    "tags": [
      "quantum-computing-simulation"
    ]
  },
  {
    "role": "Topological Qubit Theorist.",
    "objective": "Produce a LaTeX mini-review of anyonic braiding statistics for **{platform}** within **{word_limit}** words.",
    "requirements": [
      "Explain SU(2)_k fusion rules relevant to {platform}.",
      "Compare Fibonacci vs Ising anyons in tabular form.",
      "Cite at least 5 peer-reviewed papers in APS style."
    ],
    "output_format": "LaTeX article skeleton.",
    "placeholders": [
      "platform",
      "word_limit"
    ],
    "tags": [
      "quantum-computing-simulation"
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
    "role": "Atomic Force Microscopy Specialist.",
    "objective": "Generate force-distance curve analysis for **{afm_forcefile}** on sample **{sample_id}**.",
    "requirements": [
      "Fit Hertz-Sneddon model to determine elastic modulus.",
      "Correct baseline drift and cantilever deflection sensitivity.",
      "Report modulus histogram with n>200 curves."
    ],
    "output_format": "Markdown with plots and table.",
    "placeholders": [
      "afm_forcefile",
      "sample_id"
    ],
    "tags": [
      "advanced-materials-characterization"
    ]
  },
  {
    "role": "FTIR Chemometrician.",
    "objective": "Develop PLS-R model predicting **{property_name}** from FTIR dataset **{ftir_matrix}**.",
    "requirements": [
      "Preprocess spectra with SNV and Savitzky-Golay 1st derivative.",
      "Determine optimal latent variables via cross-validation.",
      "Provide regression coefficients plot and prediction R\u00b2."
    ],
    "output_format": "Markdown with code and results.",
    "placeholders": [
      "ftir_matrix",
      "property_name"
    ],
    "tags": [
      "advanced-materials-characterization"
    ]
  },
  {
    "role": "Neutron Scattering Modeler.",
    "objective": "Fit SANS data **{sans_file}** for **{polymer_system}** to core-shell sphere model.",
    "requirements": [
      "Estimate shell thickness and contrast match point.",
      "Provide SasView .ses file parameters.",
      "Include \u03c7\u00b2 goodness-of-fit comparison with Guinier model."
    ],
    "output_format": "Markdown with figures and parameter table.",
    "placeholders": [
      "polymer_system",
      "sans_file"
    ],
    "tags": [
      "advanced-materials-characterization"
    ]
  },
  {
    "role": "M\u00f6ssbauer Spectroscopy Analyst.",
    "objective": "Interpret 57Fe M\u00f6ssbauer spectrum **{mossbauer_data}** of **{iron_phase}** at {temperature_k} K.",
    "requirements": [
      "Fit sextet and doublet components including isomer shift, quadrupole splitting.",
      "Discuss magnetic ordering conclusions.",
      "Provide goodness-of-fit (\u03c7\u00b2) and model comparison."
    ],
    "output_format": "Markdown with figure and analysis text.",
    "placeholders": [
      "iron_phase",
      "mossbauer_data",
      "temperature_k"
    ],
    "tags": [
      "advanced-materials-characterization"
    ]
  },
  {
    "role": "TEM Image Analyst.",
    "objective": "Measure dislocation density in **{tem_image}** of {alloy_name} using line intercept method.",
    "requirements": [
      "Calibrate scale bar to nm accuracy.",
      "Analyze at least 5 regions to compute average and std dev.",
      "Provide annotated image overlays."
    ],
    "output_format": "Markdown with images and Python code.",
    "placeholders": [
      "alloy_name",
      "tem_image"
    ],
    "tags": [
      "advanced-materials-characterization"
    ]
  },
  {
    "role": "Nanoindentation Data Scientist.",
    "objective": "Process load-displacement data **{indentation_csv}** to extract hardness and modulus for **{coating_name}**.",
    "requirements": [
      "Apply Oliver-Pharr method with area function calibration.",
      "Exclude pop-ins and surface roughness outliers.",
      "Plot hardness vs depth and summary statistics."
    ],
    "output_format": "Markdown with code and plots.",
    "placeholders": [
      "coating_name",
      "indentation_csv"
    ],
    "tags": [
      "advanced-materials-characterization"
    ]
  },
  {
    "role": "XPS Quantification Expert.",
    "objective": "Quantify surface composition of **{xps_survey}** using sensitivity factors from **{sf_database}**.",
    "requirements": [
      "Subtract Shirley background and fit Voigt profiles.",
      "Calculate atomic percentages with 2 % precision.",
      "Report high-resolution C1s deconvolution."
    ],
    "output_format": "Markdown with plots and summary table.",
    "placeholders": [
      "sf_database",
      "xps_survey"
    ],
    "tags": [
      "advanced-materials-characterization"
    ]
  },
  {
    "role": "XRD Phase Identifier.",
    "objective": "Identify crystalline phases in **{diffraction_pattern}** using PDF-4+ database and Rietveld refinement.",
    "requirements": [
      "Provide refined lattice parameters and crystallite size.",
      "Include goodness-of-fit indicators (Rwp, \u03c7\u00b2).",
      "Output CIF file and plotted obs-calc difference."
    ],
    "output_format": "Markdown with plots and CIF block.",
    "placeholders": [
      "diffraction_pattern"
    ],
    "tags": [
      "advanced-materials-characterization"
    ]
  },
  {
    "role": "Raman Spectroscopy Interpreter.",
    "objective": "Assign vibrational modes in **{raman_spectrum}** of **{compound_name}** between 200-1800 cm\u207b\u00b9.",
    "requirements": [
      "Subtract fluorescence background via polynomial fitting.",
      "Compare peak positions with {reference_spectra}.",
      "Output annotated spectrum and assignments table."
    ],
    "output_format": "Markdown with figure and table.",
    "placeholders": [
      "compound_name",
      "raman_spectrum",
      "reference_spectra"
    ],
    "tags": [
      "advanced-materials-characterization"
    ]
  },
  {
    "role": "Thermogravimetric Analyst.",
    "objective": "Determine activation energy of **{catalyst_sample}** decomposition using TGA **{tga_csv}** at multiple heating rates.",
    "requirements": [
      "Apply Ozawa-Flynn-Wall model.",
      "Plot ln \u03b2 vs 1/T for conversion fractions 0.1-0.9.",
      "Report average Ea and 95 % CI."
    ],
    "output_format": "Markdown with plots and calculations.",
    "placeholders": [
      "catalyst_sample",
      "tga_csv"
    ],
    "tags": [
      "advanced-materials-characterization"
    ]
  },
  {
    "role": "LiDAR Forestry Analyst.",
    "objective": "Estimate above-ground biomass for **{forest_region_name}** from **{lidar_pointcloud}** data.",
    "requirements": [
      "Compute canopy height model at 1 m resolution.",
      "Apply allometric equations from {species_eq_dataset}.",
      "Report total biomass in Mg and uncertainty \u00b1 10 %."
    ],
    "output_format": "Markdown plus JSON summary block.",
    "placeholders": [
      "forest_region_name",
      "lidar_pointcloud",
      "species_eq_dataset"
    ],
    "tags": [
      "geospatial-analysis-remote-sensing"
    ]
  },
  {
    "role": "Marine GIS Consultant.",
    "objective": "Model oil spill drift trajectory from **{spill_latlon}** on **{start_date}** for {simulation_hours} h using HYCOM data.",
    "requirements": [
      "Incorporate wind forcing from {noaa_grib} and Stokes drift.",
      "Provide Python code using Parcels library.",
      "Output shapefile of centroid path and probability envelope."
    ],
    "output_format": "Markdown with map snapshot placeholders.",
    "placeholders": [
      "noaa_grib",
      "simulation_hours",
      "spill_latlon",
      "start_date"
    ],
    "tags": [
      "geospatial-analysis-remote-sensing"
    ]
  },
  {
    "role": "Land-Use Change Modeler.",
    "objective": "Calibrate a CLUE-S model predicting urban expansion of **{metro_area}** to **{year_target}**.",
    "requirements": [
      "Derive driving factors from {dem_raster}, roads, and population density layers.",
      "Include Monte Carlo runs (n=100) to quantify allocation uncertainty.",
      "Report kappa statistics and ROC curves."
    ],
    "output_format": "Markdown with section headers and tables.",
    "placeholders": [
      "dem_raster",
      "metro_area",
      "year_target"
    ],
    "tags": [
      "geospatial-analysis-remote-sensing"
    ]
  },
  {
    "role": "Photogrammetry Pipeline Engineer.",
    "objective": "Outline steps to build a 3-D mesh of **{monument_name}** from **{image_folder}** UAV photos.",
    "requirements": [
      "Specify camera calibration using OpenCV charuco board images.",
      "Use OpenDroneMap commands for sparse, dense, and texturing stages.",
      "Export OBJ and 10k-face decimated glTF for web."
    ],
    "output_format": "Markdown with command snippets and checklist.",
    "placeholders": [
      "image_folder",
      "monument_name"
    ],
    "tags": [
      "geospatial-analysis-remote-sensing"
    ]
  },
  {
    "role": "GNSS Reflectometry Researcher.",
    "objective": "Derive soil moisture estimates at **{site_code}** using SNR data from **{gnss_receiver_id}**.",
    "requirements": [
      "Compute reflected signal peak frequency and convert to dielectric constant.",
      "Correlate results with in-situ {sm_instrument} sensors.",
      "Include Python matplotlib plots of diurnal variability."
    ],
    "output_format": "Markdown report with equations.",
    "placeholders": [
      "gnss_receiver_id",
      "site_code",
      "sm_instrument"
    ],
    "tags": [
      "geospatial-analysis-remote-sensing"
    ]
  },
  {
    "role": "Climate Downscaling Expert.",
    "objective": "Downscale CMIP6 temperature projections for **{rcp_scenario}** to 1 km resolution over **{country_iso}**.",
    "requirements": [
      "Use bias-correction spatial disaggregation (BCSD) against ERA5 baseline.",
      "Provide shell script orchestrating CDO operations.",
      "Visualize monthly anomalies 2040-2060."
    ],
    "output_format": "Markdown plus NetCDF metadata block.",
    "placeholders": [
      "country_iso",
      "rcp_scenario"
    ],
    "tags": [
      "geospatial-analysis-remote-sensing"
    ]
  },
  {
    "role": "Urban Heat Mapping Engineer.",
    "objective": "Produce a high-resolution UHI map for **{city_name}** using **{landsat_collection}** thermal bands.",
    "requirements": [
      "Perform radiometric calibration and emissivity correction.",
      "Validate surface temperature with {met_station_csv} readings.",
      "Highlight hotspots exceeding 2 \u00b0C over baseline."
    ],
    "output_format": "ArcGIS-ready GeoPackage and Markdown report.",
    "placeholders": [
      "city_name",
      "landsat_collection",
      "met_station_csv"
    ],
    "tags": [
      "geospatial-analysis-remote-sensing"
    ]
  },
  {
    "role": "Ocean Color Algorithm Developer.",
    "objective": "Implement a remote-sensing reflectance to chlorophyll-a algorithm for **{sensor_name}** data over **{region_bbox}**.",
    "requirements": [
      "Validate model against {insitu_dataset} cruise measurements.",
      "Provide Python code using xarray and rioxarray.",
      "Map chlorophyll anomaly relative to 2003-2020 climatology."
    ],
    "output_format": "Markdown with code and result figures.",
    "placeholders": [
      "insitu_dataset",
      "region_bbox",
      "sensor_name"
    ],
    "tags": [
      "geospatial-analysis-remote-sensing"
    ]
  },
  {
    "role": "Hyperspectral Mineralogist.",
    "objective": "Classify lithology in **{hypercube_file}** using spectral angle mapper with **{reference_library}** signatures.",
    "requirements": [
      "Perform atmospheric correction (FLAASH) and noise subspace elimination.",
      "Output mineral abundance maps with color legend.",
      "Provide Python code using the spectral library path."
    ],
    "output_format": "Jupyter Markdown with H3 headers.",
    "placeholders": [
      "hypercube_file",
      "reference_library"
    ],
    "tags": [
      "geospatial-analysis-remote-sensing"
    ]
  },
  {
    "role": "SAR Interferometry Specialist.",
    "objective": "Generate a processing workflow to derive ground deformation map from **{sentinel_pair}** SLC images over **{aoi_bbox}**.",
    "requirements": [
      "Include steps: co-registration, phase unwrapping, atmospheric correction using {gnss_tropo_data}.",
      "Provide bash commands using ISCE2 and snaphu.",
      "Output cumulative displacement GeoTIFF and QC plots."
    ],
    "output_format": "Markdown with code blocks and command snippets.",
    "placeholders": [
      "aoi_bbox",
      "gnss_tropo_data",
      "sentinel_pair"
    ],
    "tags": [
      "geospatial-analysis-remote-sensing"
    ]
  },
  {
    "role": "Photoacoustic Imaging Innovator.",
    "objective": "Draft a protocol to quantify oxygen saturation in **{pa_signal_file}** for **{animal_model}**.",
    "requirements": [
      "Outline multispectral unmixing equations and speed-of-sound correction.",
      "Provide MATLAB code for fluence compensation.",
      "Include validation procedure using co-registered pulse-oximeter readings."
    ],
    "output_format": "Markdown with equations and MATLAB block.",
    "placeholders": [
      "animal_model",
      "pa_signal_file"
    ],
    "tags": [
      "biomedical-imaging-diagnostics"
    ]
  },
  {
    "role": "3-D Echocardiography Quantifier.",
    "objective": "Plan a pipeline to compute LV ejection fraction from **{3d_echo_dicom}** dataset in **{software_framework}**.",
    "requirements": [
      "Outline steps: preprocessing, active contour segmentation, surface mesh generation.",
      "Include GPU acceleration tips and memory footprint estimation.",
      "Provide sanity checks against Simpson-biplane method."
    ],
    "output_format": "Markdown with numbered steps and tips.",
    "placeholders": [
      "3d_echo_dicom",
      "software_framework"
    ],
    "tags": [
      "biomedical-imaging-diagnostics"
    ]
  },
  {
    "role": "Functional MRI Analyst.",
    "objective": "Generate a GLM analysis for **{task_paradigm}** using **{fmriprep_output}** preprocessed BOLD data.",
    "requirements": [
      "Specify design matrix with HRF convolution and motion regressors.",
      "Include contrasts for primary task vs baseline.",
      "Provide Nilearn python snippet and thresholded z-maps."
    ],
    "output_format": "Markdown with code blocks and figure placeholders.",
    "placeholders": [
      "fmriprep_output",
      "task_paradigm"
    ],
    "tags": [
      "biomedical-imaging-diagnostics"
    ]
  },
  {
    "role": "Ultrasound Beamformer.",
    "objective": "Develop a delay-and-sum beamforming script processing raw RF data **{rf_dataset}** for probe **{probe_model}**.",
    "requirements": [
      "Calculate dynamic focusing delays in microseconds.",
      "Implement apodization using Hanning window.",
      "Display reconstructed B-mode image and measure axial resolution."
    ],
    "output_format": "Markdown with Python code and image placeholder.",
    "placeholders": [
      "probe_model",
      "rf_dataset"
    ],
    "tags": [
      "biomedical-imaging-diagnostics"
    ]
  },
  {
    "role": "Diffusion MRI Tractography Expert.",
    "objective": "Set up deterministic tracking for **{dwi_series}** with **{bvecs}** using FACT algorithm.",
    "requirements": [
      "Compute tensor model, FA threshold 0.2, angle limit 45\u00b0.",
      "Visualize arcuate fasciculus using TrackVis compatible format.",
      "Report streamline count and average length."
    ],
    "output_format": "Markdown with command examples.",
    "placeholders": [
      "bvecs",
      "dwi_series"
    ],
    "tags": [
      "biomedical-imaging-diagnostics"
    ]
  },
  {
    "role": "Bayesian Segmentation Researcher.",
    "objective": "Design a probabilistic U-Net training plan on **{ct_dataset}** for organ **{target_organ}**.",
    "requirements": [
      "Detail data preprocessing, augmentation, and evidence lower bound loss formulation.",
      "Specify training hyperparameters for {gpu_model} (memory limit).",
      "Include calibration assessment using expected calibration error."
    ],
    "output_format": "Markdown with H2 headers and python code sections.",
    "placeholders": [
      "ct_dataset",
      "gpu_model",
      "target_organ"
    ],
    "tags": [
      "biomedical-imaging-diagnostics"
    ]
  },
  {
    "role": "Radiomics Feature Engineer.",
    "objective": "Extract IBSI-compliant texture features from **{dicom_series}** tumor ROI mask **{roi_mask}**.",
    "requirements": [
      "Normalize intensities using z-score within {reference_tissue}.",
      "Provide Python code leveraging PyRadiomics and SimpleITK.",
      "Output CSV with first-order, GLCM, and wavelet features."
    ],
    "output_format": "Markdown with CSV snippet and explanation.",
    "placeholders": [
      "dicom_series",
      "reference_tissue",
      "roi_mask"
    ],
    "tags": [
      "biomedical-imaging-diagnostics"
    ]
  },
  {
    "role": "Digital Pathology Pipeline Lead.",
    "objective": "Create a WSI tiling and classification workflow to detect **{lesion_type}** in **{stain_type}** slides.",
    "requirements": [
      "Define tile size, overlap, and stain normalization via Macenko method.",
      "Integrate {cnn_architecture} using TensorFlow-GPU, with inference batch size guidelines.",
      "Produce heatmap overlay and slide-level ROC metrics."
    ],
    "output_format": "Markdown report and schematic workflow diagram.",
    "placeholders": [
      "cnn_architecture",
      "lesion_type",
      "stain_type"
    ],
    "tags": [
      "biomedical-imaging-diagnostics"
    ]
  },
  {
    "role": "Spectral CT Material Decomposer.",
    "objective": "Create dual-energy decomposition for **{spectral_ct_dataset}** into water and iodine basis images.",
    "requirements": [
      "Use image-based material decomposition equations with beam hardening correction.",
      "Include {reconstruction_kernel} kernel description.",
      "Provide quantification of iodine concentration in mg/ml for ROI list."
    ],
    "output_format": "Markdown with equations and results table.",
    "placeholders": [
      "reconstruction_kernel",
      "spectral_ct_dataset"
    ],
    "tags": [
      "biomedical-imaging-diagnostics"
    ]
  },
  {
    "role": "Optical Coherence Tomography Scientist.",
    "objective": "Generate attenuation coefficient maps for **{oct_volume}** corneal scan using depth-compensated algorithm.",
    "requirements": [
      "Apply logarithmic intensity rescaling and axial registration.",
      "Provide code snippet in {language_choice} implementing exponential fit.",
      "Benchmark runtime vs simple slope method."
    ],
    "output_format": "Markdown with code and result plots.",
    "placeholders": [
      "language_choice",
      "oct_volume"
    ],
    "tags": [
      "biomedical-imaging-diagnostics"
    ]
  },
  {
    "role": "XVA Analyst.",
    "objective": "Calculate CVA for **{irs_portfolio}** trades under **{cs01_curve}** CSA rules.",
    "requirements": [
      "Run Monte Carlo simulation with 50k paths using Hull-White interest rate model.",
      "Implement exposure regression using least-squares Monte Carlo.",
      "Provide sensitivity to CS01 and wrong-way risk discussion."
    ],
    "output_format": "Markdown report with equations and result tables.",
    "placeholders": [
      "cs01_curve",
      "irs_portfolio"
    ],
    "tags": [
      "financial-risk-modeling"
    ]
  },
  {
    "role": "Climate Risk Modeler.",
    "objective": "Quantify physical risk VaR for **{real_estate_portfolio}** given RCP **{rcp_code}** flood projections.",
    "requirements": [
      "Integrate hazard maps with property geolocations using {gis_shapefile}.",
      "Apply damage functions to estimate loss distribution.",
      "Provide 99th percentile VaR for 2030 and 2050 horizons."
    ],
    "output_format": "Markdown with maps and summary table.",
    "placeholders": [
      "gis_shapefile",
      "rcp_code",
      "real_estate_portfolio"
    ],
    "tags": [
      "financial-risk-modeling"
    ]
  },
  {
    "role": "Structural Credit Model Engineer.",
    "objective": "Implement a Merton-KKV multi-period model for **{firm_ticker}** equity and debt structure.",
    "requirements": [
      "Estimate asset volatility using historical returns from {data_provider}.",
      "Calibrate default barrier and recovery rate.",
      "Plot distance-to-default trajectory over 5 years."
    ],
    "output_format": "Markdown with code blocks and chart.",
    "placeholders": [
      "data_provider",
      "firm_ticker"
    ],
    "tags": [
      "financial-risk-modeling"
    ]
  },
  {
    "role": "Market Microstructure Researcher.",
    "objective": "Analyze limit order book resiliency for **{ticker_symbol}** around **{event_timestamp}**.",
    "requirements": [
      "Download depth-10 order book data via {lob_api}.",
      "Compute bid-ask spread recovery time and order flow imbalance.",
      "Plot normalized liquidity metrics \u00b1 30 min of event."
    ],
    "output_format": "Markdown with code snippets and plots.",
    "placeholders": [
      "event_timestamp",
      "lob_api",
      "ticker_symbol"
    ],
    "tags": [
      "financial-risk-modeling"
    ]
  },
  {
    "role": "Credit Risk Quant.",
    "objective": "Build a PD model for **{loan_portfolio}** using logistic regression and **{macro_variables_csv}**.",
    "requirements": [
      "Perform WoE binning and IV calculation for categorical predictors.",
      "Apply 5-fold cross-validation and report ROC AUC, KS statistic.",
      "Generate scorecard scaling with PDO 20 and base score 600."
    ],
    "output_format": "Markdown with tables and Python code blocks.",
    "placeholders": [
      "loan_portfolio",
      "macro_variables_csv"
    ],
    "tags": [
      "financial-risk-modeling"
    ]
  },
  {
    "role": "Portfolio Optimization Advisor.",
    "objective": "Construct a risk-parity portfolio of **{asset_list}** using daily returns from **{start_date}** to **{end_date}**.",
    "requirements": [
      "Estimate covariance matrix with Ledoit-Wolf shrinkage.",
      "Enforce leverage limit of 150 % and transaction cost of 5 bps.",
      "Backtest annualized Sharpe ratio vs equal-weight benchmark."
    ],
    "output_format": "Markdown with tables and Matplotlib code.",
    "placeholders": [
      "asset_list",
      "end_date",
      "start_date"
    ],
    "tags": [
      "financial-risk-modeling"
    ]
  },
  {
    "role": "Operational Risk Scenario Builder.",
    "objective": "Generate stress scenarios for **{business_line}** cyber attack losses using **{loss_distribution_file}**.",
    "requirements": [
      "Fit severity with Lognormal-GPD hybrid distribution.",
      "Simulate annual loss distribution via compound Poisson.",
      "Provide 95 % quantile and narrative description for top scenarios."
    ],
    "output_format": "Markdown with statistics and narrative section.",
    "placeholders": [
      "business_line",
      "loss_distribution_file"
    ],
    "tags": [
      "financial-risk-modeling"
    ]
  },
  {
    "role": "Basel III Capital Calculator.",
    "objective": "Compute standardized approach capital charges for **{trading_book}** market risk exposures.",
    "requirements": [
      "Map instruments to risk classes and buckets.",
      "Calculate sensitivities-based method delta and vega charges using {fx_rates_csv}.",
      "Summarize total capital requirement and explain diversification benefits."
    ],
    "output_format": "Markdown with formulae and tables.",
    "placeholders": [
      "fx_rates_csv",
      "trading_book"
    ],
    "tags": [
      "financial-risk-modeling"
    ]
  },
  {
    "role": "Liquidity Risk Reporter.",
    "objective": "Draft a LCR calculation for **{bank_name}** using daily cash-flow data **{cashflow_csv}**.",
    "requirements": [
      "Classify inflows/outflows into HQLA categories per Basel guidelines.",
      "Compute 30-day stressed net cash outflow and LCR ratio.",
      "Visualize time series of HQLA buffer vs requirement."
    ],
    "output_format": "Markdown with tables and line chart.",
    "placeholders": [
      "bank_name",
      "cashflow_csv"
    ],
    "tags": [
      "financial-risk-modeling"
    ]
  },
  {
    "role": "Commodity Derivatives Quant.",
    "objective": "Price an Asian options strip on **{commodity_symbol}** with seasonality adjustment using **{pricing_grid}** time steps.",
    "requirements": [
      "Model spot dynamics with Schwartz-Smith two-factor model.",
      "Implement lattice method and Monte Carlo validation.",
      "Report Greeks (delta, vega) at valuation date."
    ],
    "output_format": "Markdown with valuation table.",
    "placeholders": [
      "commodity_symbol",
      "pricing_grid"
    ],
    "tags": [
      "financial-risk-modeling"
    ]
  },
  {
    "role": "Wind Turbine Control Engineer.",
    "objective": "Design an individual pitch control law for **{turbine_model}** to minimize fatigue loads in IEC Class **{wind_class}**.",
    "requirements": [
      "Implement gain-scheduled PI controller using FAST-Simulink co-simulation.",
      "Include tuning procedure using singular value decomposition of MIMO system.",
      "Present load reduction metrics on blade root bending."
    ],
    "output_format": "Markdown with MATLAB/Simulink snippets.",
    "placeholders": [
      "turbine_model",
      "wind_class"
    ],
    "tags": [
      "renewable-energy-systems-optimization"
    ]
  },
  {
    "role": "Electric Vehicle Fleet Scheduler.",
    "objective": "Optimize charging schedule for **{fleet_size}** EVs with route data **{route_csv}** at depot **{charger_power}** kW each.",
    "requirements": [
      "Use MILP minimizing electricity cost with TOU tariff file {tariff_csv}.",
      "Enforce state-of-charge constraints before departure.",
      "Provide Gantt-chart style schedule and cost summary."
    ],
    "output_format": "Markdown with pandas code and plot.",
    "placeholders": [
      "charger_power",
      "fleet_size",
      "route_csv",
      "tariff_csv"
    ],
    "tags": [
      "renewable-energy-systems-optimization"
    ]
  },
  {
    "role": "Solar Thermal CSP Analyst.",
    "objective": "Evaluate thermal storage dispatch strategy for **{csp_plant_name}** with molten salt tank **{storage_hours}** h.",
    "requirements": [
      "Simulate dispatch to maximize revenue under {market_price_csv}.",
      "Use SAM or equivalent Python model.",
      "Report annual capacity factor and revenue uplift."
    ],
    "output_format": "Markdown with results table and plot.",
    "placeholders": [
      "csp_plant_name",
      "market_price_csv",
      "storage_hours"
    ],
    "tags": [
      "renewable-energy-systems-optimization"
    ]
  },
  {
    "role": "Bioenergy Supply Scheduler.",
    "objective": "Plan a feedstock delivery schedule for **{biomass_plant}** requiring **{dry_tonnes}** t/year.",
    "requirements": [
      "Use GIS road network analysis to optimize trucking routes.",
      "Include emission factors and cost per tonne-km.",
      "Provide monthly delivery table and GHG savings estimate."
    ],
    "output_format": "Markdown with maps and tables.",
    "placeholders": [
      "biomass_plant",
      "dry_tonnes"
    ],
    "tags": [
      "renewable-energy-systems-optimization"
    ]
  },
  {
    "role": "Heat Pump System Designer.",
    "objective": "Size a ground-source heat pump for **{building_area}** m\u00b2 office in climate zone **{ashrae_zone}**.",
    "requirements": [
      "Calculate heating/cooling loads using hourly bin method.",
      "Determine borehole depth and spacing with {ghx_software}.",
      "Estimate COP seasonal performance factor."
    ],
    "output_format": "Markdown with calculation steps and summary table.",
    "placeholders": [
      "ashrae_zone",
      "building_area",
      "ghx_software"
    ],
    "tags": [
      "renewable-energy-systems-optimization"
    ]
  },
  {
    "role": "Battery Degradation Modeler.",
    "objective": "Set up a calendar-cycling degradation model for **{lithium_cell_type}** at **{storage_temperature}** \u00b0C.",
    "requirements": [
      "Use Arrhenius relation and SEI growth equations.",
      "Calibrate model with {aging_dataset} experimental data.",
      "Predict capacity retention at 5-year mark with \u00b12 % accuracy."
    ],
    "output_format": "Markdown with equations and plots.",
    "placeholders": [
      "aging_dataset",
      "lithium_cell_type",
      "storage_temperature"
    ],
    "tags": [
      "renewable-energy-systems-optimization"
    ]
  },
  {
    "role": "Wave Energy Converter Analyst.",
    "objective": "Model PTO damping optimization for **{wec_device}** in sea state **{hs_tp}** using WEC-SIM.",
    "requirements": [
      "Perform time-domain simulation for 3-h duration.",
      "Include spectral moments calculation.",
      "Report absorbed power vs damping curve."
    ],
    "output_format": "Markdown with MATLAB code and plot.",
    "placeholders": [
      "hs_tp",
      "wec_device"
    ],
    "tags": [
      "renewable-energy-systems-optimization"
    ]
  },
  {
    "role": "PV System Yield Analyst.",
    "objective": "Simulate annual energy yield for **{pv_array_capacity}** kWp rooftop system in **{city_latlon}** orientation **{tilt_angle}**\u00b0.",
    "requirements": [
      "Use PVLIB with TMY data and losses (soiling, mismatch) totaling 8 %.",
      "Provide hourly output CSV and monthly summary bar chart.",
      "Estimate LCOE with given CAPEX {capex_per_kw} \u20ac/kW."
    ],
    "output_format": "Markdown with code and results plots.",
    "placeholders": [
      "capex_per_kw",
      "city_latlon",
      "pv_array_capacity",
      "tilt_angle"
    ],
    "tags": [
      "renewable-energy-systems-optimization"
    ]
  },
  {
    "role": "Microgrid Power Flow Planner.",
    "objective": "Balance load demand vs generation in **{microgrid_id}** using **{opendss_model}** for next **{horizon_hours}** h.",
    "requirements": [
      "Include diesel genset fuel consumption curve and battery SOC constraints.",
      "Optimize objective: minimize NPV of fuel cost and O&M.",
      "Provide JSON schedule for each DER."
    ],
    "output_format": "Markdown with optimization results and JSON snippet.",
    "placeholders": [
      "horizon_hours",
      "microgrid_id",
      "opendss_model"
    ],
    "tags": [
      "renewable-energy-systems-optimization"
    ]
  },
  {
    "role": "Hydrogen Electrolyzer Optimizer.",
    "objective": "Create a dispatch algorithm for **{electrolyzer_capacity}** MW PEM unit linked to PV profile **{solar_profile_csv}**.",
    "requirements": [
      "Respect ramp rate 10 %/min and minimum load 20 %.",
      "Use mixed-integer linear programming in Pyomo.",
      "Report weekly hydrogen output, utilization factor, and curtailed energy."
    ],
    "output_format": "Markdown with code and result tables.",
    "placeholders": [
      "electrolyzer_capacity",
      "solar_profile_csv"
    ],
    "tags": [
      "renewable-energy-systems-optimization"
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