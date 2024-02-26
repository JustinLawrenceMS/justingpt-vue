<template>
  <div class="chatbot">
    <perfect-scrollbar class="chat-container" ref="chatContainer">
      <div
        v-for="(message, index) in messages"
        :key="index"
        class="message"
        :class="{ user: message.from === 'user', bot: message.from === 'bot' }"
        :ref="setMessageRef(index)"
      >
        <div class="message-content">
          <span class="inner-content">{{ message.content }}</span>
        </div>
      </div>
    </perfect-scrollbar>
    <input
      type="text"
      v-model="userMessage"
      @keyup.enter="sendMessage"
      class="message-input"
      placeholder="Type your message..."
    />
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";

export default {
  setup() {
    const messageRefs = ref([]);
    const messages = ref([
      { content: "Hello! How can I help you today?", from: "bot" },
    ]);

    function setMessageRef(index) {
      return (el) => {
        messageRefs.value[index] = el;
        updateMessageWidth(index);
      };
    }



    function updateMessageWidth(index) {
      const messageRef = messageRefs.value[index];
      if (messageRef) {
        messageRef.style.width = `${
          Math.ceil(
            messageRef.children[0].children[0].getBoundingClientRect().width
          ) + 30
        }px`;
      }
    }

    onMounted(() => {
      watch(
      messages,
          () => {
          messageRefs.value.forEach((_, index) => {
            updateMessageWidth(index);
          });
        },
        { immediate: true }
      );
    });

    return {
      messages,
      setMessageRef,
    };
  },
  data() {
    return {
      userMessage: "",
    };
  },
  methods: {
    sendMessage() {
      if (this.userMessage.trim() === "") return;

      // Send user message
      this.messages.push({ content: this.userMessage, from: "user" });
      // Simulate bot response (replace this with actual bot response)
      this.messages.push({ content: "This is a bot response.", from: "bot" });
      this.userMessage = ""; // Clear input
      this.$nextTick(() => {
        this.scrollToBottom();
      });
    },
    scrollToBottom() {
      this.$refs.chatContainer.$el.scrollTop =
        this.$refs.chatContainer.$el.scrollHeight;
    },
  },
  mounted() {
    this.scrollToBottom();
  },
};
</script>

<style scoped>
/* desktop and default styles */
.chatbot {
  width: 20vw;
  border: 1px solid #ccc;
  border-radius: 30px;
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

.bot {
  margin-right: 0px;
  margin-left: auto;
  min-width: 30%;
  max-width: 70%;
}

.user {
  min-width: 30%;
  max-width: 70%;
}

.message-content {
  padding: 8px 10px;
  color: black;
  align-text: center;
}

.user .message-content {
  background-color: var(--light-blue);
  color: #fff;
  border-radius: 15%;
}

.bot .message-content {
  background-color: var(--light-green);
  border-radius: 60%;
}

.message-input {
  width: calc(100% - 20px);
  padding: 10px;
  border: none;
  outline: none;
  color: white;
  font-weight: bold;
  background-color: #fff;
  color: #2b2b2b;
}

@media only screen and (max-device-width: 600px) {
  .chatbot {
    width: 100%;
  }
  .chat-container {
    height: auto;
  }
}
@media only screen and (max-device-width: 1000px) {
  .chatbot {
    width: 100%;
    overflow: hidden;
  }
  .chat-container {
    height: 60vh;
    overflow-y: auto;
  }
}
</style>
