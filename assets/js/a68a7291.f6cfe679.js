"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3907],{5931:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=t(5893),a=t(1151);const i={title:"AutoGenBench -- A Tool for Measuring and Evaluating AutoGen Agents",authors:["afourney","qingyunwu"],tags:["AutoGen"]},s=void 0,r={permalink:"/autogen/blog/2024/01/25/AutoGenBench",source:"@site/blog/2024-01-25-AutoGenBench/index.mdx",title:"AutoGenBench -- A Tool for Measuring and Evaluating AutoGen Agents",description:"AutoGenBench",date:"2024-01-25T00:00:00.000Z",formattedDate:"January 25, 2024",tags:[{label:"AutoGen",permalink:"/autogen/blog/tags/auto-gen"}],readingTime:6.595,hasTruncateMarker:!1,authors:[{name:"Adam Fourney",title:"Principal Researcher Microsoft Research",url:"https://www.adamfourney.com",imageURL:"https://github.com/afourney.png",key:"afourney"},{name:"Qingyun Wu",title:"Assistant Professor at the Pennsylvania State University",url:"https://qingyun-wu.github.io/",imageURL:"https://github.com/qingyun-wu.png",key:"qingyunwu"}],frontMatter:{title:"AutoGenBench -- A Tool for Measuring and Evaluating AutoGen Agents",authors:["afourney","qingyunwu"],tags:["AutoGen"]},unlisted:!1,prevItem:{title:"AutoGen with Custom Models: Empowering Users to Use Their Own Inference Mechanism",permalink:"/autogen/blog/2024/01/26/Custom-Models"},nextItem:{title:"Code execution is now by default inside docker container",permalink:"/autogen/blog/2024/01/23/Code-execution-in-docker"}},l={authorsImageUrls:[void 0,void 0]},c=[{value:"TL;DR",id:"tldr",level:2},{value:"Quick Start",id:"quick-start",level:3},{value:"Introduction",id:"introduction",level:2},{value:"Design Principles",id:"design-principles",level:2},{value:"Installing and Running AutoGenBench",id:"installing-and-running-autogenbench",level:2},{value:"A Typical Session",id:"a-typical-session",level:2},{value:"Roadmap",id:"roadmap",level:2},{value:"Call for Participation",id:"call-for-participation",level:2}];function u(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{alt:"AutoGenBench",src:t(503).Z+"",width:"1024",height:"1024"}),"\r\n",(0,o.jsx)("p",{align:"center",children:(0,o.jsx)("em",{children:"AutoGenBench is a standalone tool for evaluating AutoGen agents and workflows on common benchmarks."})})]}),"\n",(0,o.jsx)(n.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,o.jsx)(n.p,{children:"Today we are releasing AutoGenBench - a tool for evaluating AutoGen agents and workflows on established LLM and agentic benchmarks."}),"\n",(0,o.jsx)(n.p,{children:"AutoGenBench is a standalone command line tool, installable from PyPI, which handles downloading, configuring, running, and reporting supported benchmarks. AutoGenBench works best when run alongside Docker, since it uses Docker to isolate tests from one another."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["See the ",(0,o.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/samples/tools/autogenbench/README.md",children:"AutoGenBench README"})," for information on installation and running benchmarks."]}),"\n",(0,o.jsxs)(n.li,{children:["See the ",(0,o.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/samples/tools/autogenbench/CONTRIBUTING.md",children:"AutoGenBench CONTRIBUTING guide"})," for information on developing or contributing benchmark datasets."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"quick-start",children:"Quick Start"}),"\n",(0,o.jsx)(n.p,{children:"Get started quickly by running the following commands in a bash terminal."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"Note:"})," You may need to adjust the path to the ",(0,o.jsx)(n.code,{children:"OAI_CONFIG_LIST"}),", as appropriate."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"export OAI_CONFIG_LIST=$(cat ./OAI_CONFIG_LIST)\r\npip install autogenbench\r\nautogenbench clone HumanEval\r\ncd HumanEval\r\ncat README.md\r\nautogenbench run --subsample 0.1 --repeat 3 Tasks/human_eval_two_agents.jsonl\r\nautogenbench tabulate Results/human_eval_two_agents\n"})}),"\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(n.p,{children:["Measurement and evaluation are core components of every major AI or ML research project. The same is true for AutoGen. To this end, today we are releasing AutoGenBench, a standalone command line tool that we have been using to guide development of AutoGen. Conveniently, AutoGenBench handles: downloading, configuring, running, and reporting results of agents on various public benchmark datasets. In addition to reporting top-line numbers, each AutoGenBench run produces a comprehensive set of logs and telemetry that can be used for debugging, profiling, computing custom metrics, and as input to ",(0,o.jsx)(n.a,{href:"https://microsoft.github.io/autogen/blog/2023/11/20/AgentEval",children:"AgentEval"}),". In the remainder of this blog post, we outline core design principles for AutoGenBench (key to understanding its operation); present a guide to installing and running AutoGenBench; outline a roadmap for evaluation; and conclude with an open call for contributions."]}),"\n",(0,o.jsx)(n.h2,{id:"design-principles",children:"Design Principles"}),"\n",(0,o.jsx)(n.p,{children:"AutoGenBench is designed around three core design principles. Knowing these principles will help you understand the tool, its operation and its output. These three principles are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Repetition:"})," LLMs are stochastic, and in many cases, so too is the code they write to solve problems. For example, a Python script might call an external search engine, and the results may vary run-to-run. This can lead to variance in agent performance. Repetition is key to measuring and understanding this variance. To this end, AutoGenBench is built from the ground up with an understanding that tasks may be run multiple times, and that variance is a metric we often want to measure."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Isolation:"})," Agents interact with their worlds in both subtle and overt ways. For example an agent may install a python library or write a file to disk. This can lead to ordering effects that can impact future measurements. Consider, for example, comparing two agents on a common benchmark. One agent may appear more efficient than the other simply because it ran second, and benefitted from the hard work the first agent did in installing and debugging necessary Python libraries. To address this, AutoGenBench isolates each task in its own Docker container. This ensures that all runs start with the same initial conditions.  (Docker is also a ",(0,o.jsx)(n.em,{children:"much safer way to run agent-produced code"}),", in general.)"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Instrumentation:"})," While top-line metrics are great for comparing agents or models, we often want much more information about how the agents are performing, where they are getting stuck, and how they can be improved. We may also later think of new research questions that require computing a different set of metrics. To this end, AutoGenBench is designed to log everything, and to compute metrics from those logs. This ensures that one can always go back to the logs to answer questions about what happened, run profiling software, or feed the logs into tools like ",(0,o.jsx)(n.a,{href:"https://microsoft.github.io/autogen/blog/2023/11/20/AgentEval",children:"AgentEval"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"installing-and-running-autogenbench",children:"Installing and Running AutoGenBench"}),"\n",(0,o.jsxs)(n.p,{children:["As noted above, isolation is a key design principle, and so AutoGenBench must be run in an environment where Docker is available (desktop or Engine). ",(0,o.jsx)(n.strong,{children:"It will not run in GitHub codespaces"}),", unless you opt for native execution (which is strongly discouraged). To install Docker Desktop see ",(0,o.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop/",children:"https://www.docker.com/products/docker-desktop/"}),".\r\nOnce Docker is installed, AutoGenBench can then be installed as a standalone tool from PyPI. With ",(0,o.jsx)(n.code,{children:"pip"}),", installation can be achieved as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"pip install autogenbench\n"})}),"\n",(0,o.jsx)(n.p,{children:"After installation, you must configure your API keys. As with other AutoGen applications, AutoGenBench will look for the OpenAI keys in the OAI_CONFIG_LIST file in the current working directory, or the OAI_CONFIG_LIST environment variable. This behavior can be overridden using a command-line parameter."}),"\n",(0,o.jsx)(n.p,{children:"If you will be running multiple benchmarks, it is often most convenient to leverage the environment variable option. You can load your keys into the environment variable by executing:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"export OAI_CONFIG_LIST=$(cat ./OAI_CONFIG_LIST)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"a-typical-session",children:"A Typical Session"}),"\n",(0,o.jsx)(n.p,{children:"Once AutoGenBench and necessary keys are installed, a typical session will look as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"autogenbench clone HumanEval\r\ncd HumanEval\r\ncat README.md\r\nautogenbench run --subsample 0.1 --repeat 3 Tasks/human_eval_two_agents.jsonl\r\nautogenbench tabulate results/human_eval_two_agents\n"})}),"\n",(0,o.jsx)(n.p,{children:"Where:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"autogenbench clone HumanEval"})," downloads and expands the HumanEval benchmark scenario."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"cd HumanEval; cat README.md"})," navigates to the benchmark directory, and prints the README (which you should always read!)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"autogenbench run --subsample 0.1 --repeat 3 Tasks/human_eval_two_agents.jsonl"}),"\r\nruns a 10% subsample of the tasks defined in ",(0,o.jsx)(n.code,{children:"Tasks/human_eval_two_agents.jsonl"}),". Each task is run 3 times."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"autogenbench tabulate results/human_eval_two_agents"})," tabulates the results of the run."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["After running the above ",(0,o.jsx)(n.code,{children:"tabulate"})," command, you should see output similar to the following:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"                 Trial 0    Trial 1    Trial 2\r\nTask Id          Success    Success    Success\r\n-------------  ---------  ---------  ---------\r\nHumanEval_107       False      True       True\r\nHumanEval_22        True       True       True\r\nHumanEval_43        True       True       True\r\nHumanEval_88        True       True       True\r\nHumanEval_14        True       True       True\r\nHumanEval_157       True       True       True\r\nHumanEval_141       True       True       True\r\nHumanEval_57        True       True       True\r\nHumanEval_154       True       True       True\r\nHumanEval_153       True       True       True\r\nHumanEval_93        False      True      False\r\nHumanEval_137       True       True       True\r\nHumanEval_143       True       True       True\r\nHumanEval_13        True       True       True\r\nHumanEval_49        True       True       True\r\nHumanEval_95        True       True       True\r\n-------------  ---------  ---------  ---------\r\nSuccesses             14         16         15\r\nFailures               2          0          1\r\nMissing                0          0          0\r\nTotal                 16         16         16\r\n\r\nCAUTION: 'autogenbench tabulate' is in early preview.\r\nPlease do not cite these values in academic work without first inspecting and verifying the results in the logs yourself.\n"})}),"\n",(0,o.jsxs)(n.p,{children:["From this output we can see the results of the three separate repetitions of each task, and final summary statistics of each run. In this case, the results were generated via GPT-4 (as defined in the OAI_CONFIG_LIST that was provided), and used the ",(0,o.jsx)(n.code,{children:"TwoAgents"})," template. ",(0,o.jsxs)(n.strong,{children:["It is important to remember that AutoGenBench evaluates ",(0,o.jsx)(n.em,{children:"specific"})," end-to-end configurations of agents (as opposed to evaluating a model or cognitive framework more generally)."]})]}),"\n",(0,o.jsxs)(n.p,{children:["Finally, complete execution traces and logs can be found in the ",(0,o.jsx)(n.code,{children:"Results"})," folder. See the ",(0,o.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/samples/tools/autogenbench/README.md",children:"AutoGenBench README"})," for more details about command-line options and output formats. Each of these commands also offers extensive in-line help via:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"autogenbench --help"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"autogenbench clone --help"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"autogenbench run --help"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"autogenbench tabulate --help"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"roadmap",children:"Roadmap"}),"\n",(0,o.jsx)(n.p,{children:"While we are announcing AutoGenBench, we note that it is very much an evolving project in its own right. Over the next few weeks and months we hope to:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Onboard many additional benchmarks beyond those shipping today"}),"\n",(0,o.jsx)(n.li,{children:"Greatly improve logging and telemetry"}),"\n",(0,o.jsx)(n.li,{children:"Introduce new core metrics including total costs, task completion time, conversation turns, etc."}),"\n",(0,o.jsx)(n.li,{children:"Provide tighter integration with AgentEval and AutoGen Studio"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For an up to date tracking of our work items on this project, please see ",(0,o.jsx)(n.a,{href:"https://github.com/microsoft/autogen/issues/973",children:"AutoGenBench Work Items"})]}),"\n",(0,o.jsx)(n.h2,{id:"call-for-participation",children:"Call for Participation"}),"\n",(0,o.jsxs)(n.p,{children:["Finally, we want to end this blog post with an open call for contributions. AutoGenBench is still nascent, and has much opportunity for improvement.  New benchmarks are constantly being published, and will need to be added. Everyone may have their own distinct set of metrics that they care most about optimizing, and these metrics should be onboarded. To this end, we welcome any and all contributions to this corner of the AutoGen project. If contributing is something that interests you, please see the ",(0,o.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/samples/tools/autogenbench/CONTRIBUTING.md",children:"contributor\u2019s guide"})," and join our ",(0,o.jsx)(n.a,{href:"https://discord.gg/pAbnFJrkgZ",children:"Discord"})," discussion in the ",(0,o.jsx)(n.a,{href:"https://discord.com/channels/1153072414184452236/1199851779328847902",children:"#autogenbench"})," channel!"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},503:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/teaser-ad04850c9cbf62581c58870f0e1341e3.jpg"},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var o=t(7294);const a={},i=o.createContext(a);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);