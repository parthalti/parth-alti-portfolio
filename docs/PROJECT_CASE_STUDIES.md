# Project Case Studies

Short, interview-friendly notes on the problem, implementation, validation, and limitations of selected projects. These are intentionally written without invented performance metrics or claims of production scale.

## FlowSight

### Problem
Traffic dashboards can make model outputs look authoritative even when the underlying data is synthetic. FlowSight is an educational interface for exploring traffic-like scenarios and understanding what several simple ML methods return.

### Implementation
- React + Vite interface with a Flask API.
- Scikit-learn workflows for K-Means grouping, nearest-observation retrieval, decision-tree explanations, and linear-model contributions.
- OpenStreetMap road context through a public Overpass endpoint when that service responds.
- Scenario inputs, comparable records, and JSON export.

### Validation and evidence
- Backend unit tests and frontend helper tests run through GitHub Actions.
- Production frontend build is part of CI.
- Source, setup instructions, API endpoints, and limitations are documented in the [FlowSight repository](https://github.com/parthalti/FlowSight).

### Important limitations
Traffic observations are simulated. OpenStreetMap supplies road context, not live traffic or congestion. Model explanations describe this demonstration dataset and should not be treated as causal evidence or used for real traffic decisions.

### Next improvements
Add a reproducible example walkthrough, test map-service failure states, and capture a short demo using clearly labelled synthetic scenarios.

## RAMS Hospital

### Problem
Hospital resource workflows need to prevent conflicting allocations and make decisions auditable rather than relying on frontend-only checks.

### Implementation
- React + TypeScript frontend; Express + TypeScript API.
- PostgreSQL with Prisma for persisted entities and relationships.
- Bed/admission and operating-theatre scheduling workflows.
- Backend validation, role-based authorization, conflict checks, and audit-oriented records.

### Validation and evidence
- Jest tests cover interval-overlap behavior and critical backend rules.
- GitHub Actions checks the backend build/tests and frontend build; inspect the [Actions history](https://github.com/parthalti/RAMS-Hospital/actions) for the current run.
- Source and setup guidance live in the [RAMS-Hospital repository](https://github.com/parthalti/RAMS-Hospital).

### Important limitations
This is an academic prototype, not a certified hospital system. Do not use it with real patient data or for real clinical decisions. Demo credentials documented in the repository are development-only and must not be used for a public production deployment.

### Next improvements
Add a short, seeded demo walkthrough; keep secrets out of source control; and retain screenshots or test output from the exact commit used in a presentation.

## KrishiHedg

### Problem
Agricultural users may need a single place to explore market information, understand price risk, and review hedging-related workflows.

### Implementation
- React/Vite frontend with Node.js/Express APIs and a Python FastAPI analytics service.
- Market/price analysis and risk-related workflows.
- Marketplace and Razorpay integration work, with payment behavior dependent on configured test/live credentials.

### Validation and evidence
- Review the source and setup notes in the [KrishiHedg repository](https://github.com/parthalti/KrishiHedg).
- For interviews, be ready to trace one user journey from UI through API to persisted or computed output, and explain which components you personally implemented.

### Important limitations
Forecasts and risk outputs should be presented as decision support, not guarantees. Payment claims should distinguish sandbox/test transactions from real payments. Avoid claiming accuracy or business outcomes unless you have measured and documented them.

### Next improvements
Document API contracts, add automated tests around key analytics and payment failure cases, and include a short architecture diagram.

## Calorie Burnt Prediction

### Problem
A simple machine-learning app can make a trained model easier to explore than a notebook alone.

### Implementation
- Python machine-learning workflow with a Streamlit interface.
- Inputs are passed through the project’s prediction pipeline and displayed in the app.

### Validation and evidence
- [Live Streamlit app](https://calorie-burnt-prediction-parthalti.streamlit.app/)
- [Source repository](https://github.com/parthalti/calorie-burnt-prediction)

### Important limitations
A prediction is an estimate from the model, not a medical measurement or personal health recommendation. Model performance should be described only with metrics reproduced from the project's evaluation process.

### Next improvements
Document the dataset and evaluation split, show validated model metrics with their context, and add input validation and a small automated test suite if not already present.

---

## Interview preparation checklist

Before presenting a project, be ready to explain:
1. The problem and intended user.
2. Which files/modules you personally built or changed.
3. One important design decision and its trade-off.
4. How you tested it and what the tests do not prove.
5. A known limitation and the next improvement you would implement.

Only claim ownership, metrics, and deployment behavior that you can demonstrate from the code or a working environment.
