// Cloudflare Pages Functions — 聯絡表單 API
// 部署於 /api/contact 路由，處理 POST 請求

/**
 * 處理聯絡表單提交
 * POST /api/contact
 * Body: { name: string, phone: string, message: string }
 */
export async function onRequest(context) {
  // 僅接受 POST
  if (context.request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { name, phone, message } = await context.request.json();

    // 基本驗證
    if (!name || !phone || !message) {
      return new Response(JSON.stringify({ error: '姓名、電話與留言為必填欄位' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 這裡可擴充：發送 Email、寫入 KV 儲存、或 Webhook 通知
    // 目前單純回傳成功

    return new Response(JSON.stringify({
      success: true,
      message: '感謝您的留言！我們會盡快與您聯繫。',
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: '請求格式錯誤' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
