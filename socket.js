// Прокси WebSocket-сервер
const proxySocket = new WebSocket("ws://localhost:3004");

// WebSocket для общения с Poker Mavens
let pokerMavensSocket = null;

// Подключаемся к WebSocket-прокси серверу
proxySocket.onopen = function () {
  console.log("✅ Proxy socket connected to ws://localhost:3004");

  // Устанавливаем WebSocket-соединение с сервером Poker Mavens, когда прокси готов
  pokerMavensSocket = new WebSocket("ws://localhost:8080");

  pokerMavensSocket.onopen = function () {
    console.log(
      "✅ Connected to Poker Mavens WebSocket at ws://localhost:8080"
    );
  };

  pokerMavensSocket.onerror = function (e) {
    console.warn("⚠️ Error in Poker Mavens WebSocket", e);
  };

  pokerMavensSocket.onclose = function () {
    console.warn("🔌 Poker Mavens WebSocket disconnected");
  };
};

// Обработка входящих сообщений от прокси-сервера
proxySocket.onmessage = function (event) {
  const requestData = event.data;

  console.log("Received request from proxy server:", requestData);

  // Проверяем, если есть подключение к Poker Mavens, отправляем запрос
  if (pokerMavensSocket && pokerMavensSocket.readyState === WebSocket.OPEN) {
    console.log("Forwarding request to Poker Mavens server...");
    pokerMavensSocket.send(requestData);
  } else {
    console.warn(
      "❌ Unable to forward request, Poker Mavens WebSocket not connected"
    );
  }
};

// Обработка входящих сообщений от Poker Mavens
if (pokerMavensSocket) {
  pokerMavensSocket.onmessage = function (event) {
    const pokerMavensResponse = event.data;

    console.log("Received response from Poker Mavens:", pokerMavensResponse);

    // Отправляем ответ на прокси-сервер
    if (proxySocket.readyState === WebSocket.OPEN) {
      proxySocket.send(pokerMavensResponse);
    } else {
      console.warn(
        "❌ Unable to forward Poker Mavens response, Proxy WebSocket not connected"
      );
    }
  };
}

// Обработка ошибок WebSocket-прокси
proxySocket.onerror = function (e) {
  console.warn("⚠️ Proxy WebSocket error", e);
};

// Обработка закрытия WebSocket-прокси
proxySocket.onclose = function () {
  console.warn("🔌 Proxy WebSocket disconnected");
};
