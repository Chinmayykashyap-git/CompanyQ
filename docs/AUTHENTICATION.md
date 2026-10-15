# CompanyQ: Optional Free Authentication Specification

## 1. Guiding Philosophy: 100% Free & Guest-First

CompanyQ is architected as a **guest-first, completely free application**.
- **No Login Wall:** Candidates can search, inspect all 132 company recruitment profiles, start timed mock assessments, review results, and bookmark companies without an account.
- **Local Persistence:** By default, all candidate data (scores, attempt logs, question drafts, bookmarks, and light/dark theme preferences) is stored locally in the browser's `localStorage`.
- **Zero Cost:** The application never requires paid subscriptions, credit cards, or mandatory paid APIs.

---

## 2. Optional GitHub Sign-In Architecture (Supabase Auth)

If a developer or deploying team desires optional cloud profile synchronization across devices, the recommended approach is **Supabase Auth with GitHub OAuth** using Supabase's generous free tier.

Official documentation: [https://supabase.com/docs/guides/auth/social-login/auth-github](https://supabase.com/docs/guides/auth/social-login/auth-github)

### Architecture Diagram

```
[Candidate Browser (Guest Mode by default)]
    │
    ├── (Local Mode) -> Browser localStorage (Zero network traffic)
    │
    └── (Optional Sign-In Button)
           │
           ▼
    [GitHub OAuth Login Dialog]
           │ (User authorizes public identity only: read:user, user:email)
           ▼
    [Supabase Auth (Free Tier Hosted Service)]
           │
           ▼ (JWT Session Token)
    [Candidate Client (Stores cloud sync preference)]
           │
           ▼ (Row-Level Security RLS Policies)
    [PostgreSQL Tables: candidate_attempts, candidate_bookmarks]
```

---

## 3. Step-by-Step Setup Instructions for Deployers

To enable optional GitHub sign-in on your GitHub Pages or custom deployment:

### Step 1: Create a Free Supabase Project
1. Sign up at [https://supabase.com](https://supabase.com) (Free Tier).
2. Create a new project (e.g., `companyq-auth`).
3. Note your `Project URL` and `anon public key` (found in Project Settings -> API).

### Step 2: Register a GitHub OAuth App
1. Go to your GitHub profile -> **Settings** -> **Developer settings** -> **OAuth Apps** -> **New OAuth App**.
2. Set **Application Name**: `CompanyQ SDE Simulator`.
3. Set **Homepage URL**: Your GitHub Pages URL (e.g., `https://<username>.github.io/CompanyQ/`).
4. Set **Authorization callback URL**:
   `https://<your-project-ref>.supabase.co/auth/v1/callback`
5. Click **Register application**.
6. Generate a **Client Secret** and copy both the **Client ID** and **Client Secret**.

### Step 3: Configure Supabase Auth Provider
1. In your Supabase Dashboard, navigate to **Authentication** -> **Providers** -> **GitHub**.
2. Toggle GitHub to **Enabled**.
3. Paste the **Client ID** and **Client Secret** obtained from GitHub.
4. Save the configuration.

### Step 4: Database Schema with Row-Level Security (RLS)
Execute this SQL in the Supabase SQL Editor to enforce strict candidate data isolation:

```sql
-- Table: candidate_attempts
CREATE TABLE candidate_attempts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    assessment_set_id TEXT NOT NULL,
    company_id TEXT NOT NULL,
    title TEXT NOT NULL,
    score INT NOT NULL,
    total_possible_score INT NOT NULL,
    benchmark_passing_score INT NOT NULL,
    time_used_seconds INT NOT NULL,
    completed_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row-Level Security
ALTER TABLE candidate_attempts ENABLE ROW LEVEL SECURITY;

-- Candidates can only read and write their own attempt records
CREATE POLICY "Users can manage own attempts" 
ON candidate_attempts 
FOR ALL 
USING (auth.uid() = user_id) 
WITH CHECK (auth.uid() = user_id);
```

---

## 4. Strict Security Rules for Client-Side Code

To ensure the security and privacy of candidates:
1. **Never Expose Private Secrets:** Never commit the GitHub OAuth `Client Secret` or the Supabase `service_role key` to client-side files or public repositories.
2. **Minimal Permissions:** When requesting GitHub authentication, request only `read:user` and `user:email`. Never request repository write access or organization administrative scopes.
3. **No Breaking When Unconfigured:** The application remains 100% operational in guest mode when optional authentication environment variables are omitted.
4. **No Token Storage in LocalStorage:** JWT session tokens should be handled via secure, SameSite HTTP-only cookies or short-lived memory session states.

