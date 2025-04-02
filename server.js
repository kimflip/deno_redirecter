import { serve } from 'https://deno.land/std@0.194.0/http/server.ts'
import "https://deno.land/std@0.203.0/dotenv/load.ts"

/**
 * APIリクエストを処理する
 */
serve((req) => {
    return new Response('', {
        status: 307,
        headers: { Location: Deno.env.get("URL_LINK") },
    })
})