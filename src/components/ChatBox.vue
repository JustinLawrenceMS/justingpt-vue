<template>
  <div class="chatbot">
    <perfect-scrollbar class="chat-container" ref="chatContainer">
      <div v-for="(message, index) in messages" :key="index" class="message" :class="{ 'user': message.from === 'user', 'bot': message.from === 'bot' }">
	<div class="message-content">
		<span>{{ message.content }}</span>
	</div>
      </div>
    </perfect-scrollbar>
    <input type="text" v-model="userMessage" @keyup.enter="sendMessage" class="message-input" placeholder="Type your message...">
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageWidth: '',
      userMessage: '',
      messages: [
        { content: 'Hello! How can I help you today?', from: 'bot' }
      ]
    };
  },
  methods: {
    setMessageWidth() {

      const messageContents = document.querySelectorAll('.message-content');

      for (let i = 0; i<messageContents.length; i++) {
           console.log(messageContents[i]);
           let width = Math.ceil(messageContents[i].children[0].getBoundingClientRect().width);
           console.log(width);
           let messageWidth = (width + 10) + 'px';
           messageContents[i].style.width = messageWidth;   
       }
    },
    sendMessage() {
      if (this.userMessage.trim() === '') return;

      // Send user message
      this.messages.push({ content: this.userMessage, from: 'user' });
      this.setMessageWidth();
      // Simulate bot response (replace this with actual bot response)
      setTimeout(() => {
        this.messages.push({ content: 'This is a bot response.', from: 'bot' });
        this.setMessageWidth();
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

<style scoped>
.chatbot {
  width: 30vw;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  background-color: #fff;
}

.chat-container {
  height: 60vh;
  overflow-y: auto;
  padding: 10px;
  background-color: #fff;
  border-color: #666;
  border-width: 2px;
  border-style: solid;
}

.message {
  margin-bottom: 10px;
}

.message-content {
  padding: 8px 10px;
  border-radius: 5px;
  color: black;
}

.user .message-content {
  background-color: #007bff;
  color: #fff;
}

.bot .message-content {
  background-color: #f0f0f0;
  margin-right: 0px;
  margin-left: auto;
}

.message-input {
  width: calc(100% - 20px);
  padding: 10px;
  border: none;
  outline: none;
  font-weight: bold;
  background-color: #fff;
  color: #2b2b2b;
}
</style>
