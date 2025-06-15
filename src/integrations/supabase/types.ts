export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      generated_replies: {
        Row: {
          created_at: string | null
          id: string
          reply_text: string
          thread_id: string | null
          tone: string | null
          user_rating: number | null
          was_used: boolean | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          reply_text: string
          thread_id?: string | null
          tone?: string | null
          user_rating?: number | null
          was_used?: boolean | null
        }
        Update: {
          created_at?: string | null
          id?: string
          reply_text?: string
          thread_id?: string | null
          tone?: string | null
          user_rating?: number | null
          was_used?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "generated_replies_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "threads"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string | null
          id: string
          linkedin_profile_url: string | null
          name: string | null
          subscription_plan: string | null
          updated_at: string | null
          usage_credits: number | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id: string
          linkedin_profile_url?: string | null
          name?: string | null
          subscription_plan?: string | null
          updated_at?: string | null
          usage_credits?: number | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: string
          linkedin_profile_url?: string | null
          name?: string | null
          subscription_plan?: string | null
          updated_at?: string | null
          usage_credits?: number | null
        }
        Relationships: []
      }
      threads: {
        Row: {
          created_at: string | null
          id: string
          participant_count: number | null
          post_content: string | null
          post_url: string
          summary_text: string | null
          thread_text: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          participant_count?: number | null
          post_content?: string | null
          post_url: string
          summary_text?: string | null
          thread_text?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          participant_count?: number | null
          post_content?: string | null
          post_url?: string
          summary_text?: string | null
          thread_text?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "threads_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      usage_analytics: {
        Row: {
          action_type: string
          created_at: string | null
          id: string
          metadata: Json | null
          thread_id: string | null
          user_id: string | null
        }
        Insert: {
          action_type: string
          created_at?: string | null
          id?: string
          metadata?: Json | null
          thread_id?: string | null
          user_id?: string | null
        }
        Update: {
          action_type?: string
          created_at?: string | null
          id?: string
          metadata?: Json | null
          thread_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "usage_analytics_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "threads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "usage_analytics_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_settings: {
        Row: {
          auto_summarize: boolean | null
          created_at: string | null
          custom_prompts: string[] | null
          notification_settings: Json | null
          preferred_tone: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          auto_summarize?: boolean | null
          created_at?: string | null
          custom_prompts?: string[] | null
          notification_settings?: Json | null
          preferred_tone?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          auto_summarize?: boolean | null
          created_at?: string | null
          custom_prompts?: string[] | null
          notification_settings?: Json | null
          preferred_tone?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_settings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
