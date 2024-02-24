<template>
  <div class="chatbot">
    <div class="chat-container" ref="chatContainer">
      <div v-for="(message, index) in messages" :key="index" class="message" :class="{ 'user': message.from === 'user', 'bot': message.from === 'bot' }">
        <div class="message-content">{{ message.content }}</div>
      </div>
    </div>
    <input type="text" v-model="userMessage" @keyup.enter="sendMessage" class="message-input" placeholder="Type your message...">
  </div>
</template>

<script>
export default {
  data() {
    return {
      userMessage: '',
      messages: [
        { content: 'Hello! How can I help you today?', from: 'bot' }
      ]
    };
  },
  methods: {
    sendMessage() {
      if (this.userMessage.trim() === '') return;

      // Send user message
      this.messages.push({ content: this.userMessage, from: 'user' });

      // Simulate bot response (replace this with actual bot response)
      setTimeout(() => {
        this.messages.push({ content: 'This is a bot response.', from: 'bot' });
        this.userMessage = ''; // Clear input
        this.scrollToBottom(); // Scroll to bottom of chat
      }, 500);
    },
    scrollToBottom() {
      this.$refs.chatContainer.scrollTop = this.$refs.chatContainer.scrollHeight;
    }
  },
  mounted() {
    this.scrollToBottom();
  }
};
</script>

<style>
.chatbot {
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
}

.chat-container {
  height: 300px;
  overflow-y: auto;
  padding: 10px;
}

.message {
  margin-bottom: 10px;
}

.message-content {
  padding: 8px 10px;
  border-radius: 5px;
}

.user .message-content {
  background-color: #007bff;
  color: #fff;
}

.bot .message-content {
  background-color: #f0f0f0;
}

.message-input {
  width: calc(100% - 20px);
  padding: 10px;
  border: none;
  outline: none;
}
</style>
