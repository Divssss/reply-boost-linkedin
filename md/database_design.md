
# Database Design

## Users Table
```sql
users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  linkedin_profile_url TEXT,
  usage_credits INTEGER DEFAULT 100,
  subscription_plan TEXT DEFAULT 'free',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
)
```

## Threads Table
```sql
threads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  post_url TEXT NOT NULL,
  post_content TEXT,
  thread_text TEXT,
  summary_text TEXT,
  participant_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
)
```

## Generated Replies Table
```sql
generated_replies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  thread_id UUID REFERENCES threads(id) ON DELETE CASCADE,
  reply_text TEXT NOT NULL,
  tone TEXT DEFAULT 'professional',
  was_used BOOLEAN DEFAULT false,
  user_rating INTEGER CHECK (user_rating >= 1 AND user_rating <= 5),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
)
```

## User Settings Table
```sql
user_settings (
  user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  preferred_tone TEXT DEFAULT 'professional',
  auto_summarize BOOLEAN DEFAULT true,
  notification_settings JSONB DEFAULT '{}',
  custom_prompts TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
)
```

## Usage Analytics Table
```sql
usage_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  action_type TEXT NOT NULL, -- 'summarize', 'generate_reply', 'copy_reply'
  thread_id UUID REFERENCES threads(id) ON DELETE SET NULL,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
)
```

## Relationships
- Users have many Threads
- Threads have many Generated Replies
- Users have one Settings record
- Users have many Usage Analytics records

## Indexes
- `threads.user_id` for user-specific queries
- `threads.post_url` for duplicate detection
- `generated_replies.thread_id` for reply lookup
- `usage_analytics.user_id` and `usage_analytics.created_at` for analytics
