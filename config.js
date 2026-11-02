/* =========================================================
   购格测试 · 云端配置
   ---------------------------------------------------------
   把下面两个值换成你自己 Supabase 项目里的（Project Settings → API）：
     SUPABASE_URL      = Project URL        形如 https://abcdefghijkl.supabase.co
     SUPABASE_ANON_KEY = anon / public key  一长串 eyJ 开头

   注意：只能填 anon key，绝对不要填 service_role key。
   service_role 是万能钥匙，一旦写进前端就等于把数据库公开了。
   扣次数、写结果这些敏感操作都在数据库函数里做，前端碰不到表。
   ========================================================= */
window.APP_CONFIG = {
  SUPABASE_URL: 'https://YOUR-PROJECT.supabase.co',
  SUPABASE_ANON_KEY: 'YOUR-ANON-KEY'
};
