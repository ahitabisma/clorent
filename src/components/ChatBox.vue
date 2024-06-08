<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Minus from './icons/Minus.vue';

// Refs for DOM elements
const chatbox = ref<HTMLDivElement | null>(null);
const chatContainer = ref<HTMLDivElement | null>(null);
const userInput = ref<HTMLInputElement | null>(null);
const sendButton = ref<HTMLButtonElement | null>(null);
const openChatButton = ref<HTMLButtonElement | null>(null);
const closeChatButton = ref<HTMLButtonElement | null>(null);

const isChatboxOpen = ref(false); // Set the initial state to closed

// Function to toggle the chatbox visibility
function toggleChatbox() {
    isChatboxOpen.value = !isChatboxOpen.value;
}

function addUserMessage(message: string) {
    if (chatbox.value) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("mb-2", "text-right");
        messageElement.innerHTML = `<p class="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">${message}</p>`;
        chatbox.value.appendChild(messageElement);
        chatbox.value.scrollTop = chatbox.value.scrollHeight;
    }
}

function addBotMessage(message: string) {
    if (chatbox.value) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("mb-2");
        messageElement.innerHTML = `<p class="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">${message}</p>`;
        chatbox.value.appendChild(messageElement);
        chatbox.value.scrollTop = chatbox.value.scrollHeight;
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function respondToUser(userMessage: string) {
    // Replace this with your chatbot logic
    setTimeout(() => {
        addBotMessage("Thank you for contact us. Please wait a few seconds...");
    }, 500);
}

onMounted(() => {
    // Add event listeners after the component is mounted
    if (openChatButton.value) {
        openChatButton.value.addEventListener("click", toggleChatbox);
    }

    if (closeChatButton.value) {
        closeChatButton.value.addEventListener("click", toggleChatbox);
    }

    if (sendButton.value && userInput.value) {
        sendButton.value.addEventListener("click", function () {
            const userMessage = userInput.value!.value;
            if (userMessage.trim() !== "") {
                addUserMessage(userMessage);
                respondToUser(userMessage);
                userInput.value!.value = "";
            }
        });

        userInput.value.addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                const userMessage = userInput.value!.value;
                if (userMessage.trim() !== "") {
                    addUserMessage(userMessage);
                    respondToUser(userMessage);
                    userInput.value!.value = "";
                }
            }
        });
    }
});
</script>

<template>
    <div class="fixed bottom-8 right-8">
        <button ref="openChatButton" class="text-white rounded-md transition duration-300 flex items-center">
            <img src="/messenger.png" alt="messenger"
                class="w-14 h-14 bg-base-200 border-2 border-black hover:scale-105 transition ease-in-out p-3 rounded-2xl">
        </button>
    </div>
    <transition name="fade-slide">
        <div v-show="isChatboxOpen" ref="chatContainer"
            class="fixed bottom-0 right-0 md:bottom-16 md:right-4 w-full md:w-96 h-full md:h-auto z-20">
            <div class="bg-white shadow-md rounded-lg h-full md:max-w-lg md:w-full">
                <div class="p-4 border-b bg-white text-black rounded-t-lg flex justify-between items-center">
                    <p class="text-lg font-semibold">Clo Rent</p>
                    <button ref="closeChatButton"
                        class="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400">
                        <Minus />
                    </button>
                </div>
                <div ref="chatbox" class="p-4 h-5/6 md:h-80 overflow-y-auto">
                    <!-- Chat messages will be displayed here -->
                    <div class="mb-2">
                        <p class="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">Welcome to Style Theory!
                            😊 I'm here to match you with the right agent! 🙌

                            To offer the best support, <span class="font-semibold">I'll ask a few questions.</span>
                            Don't worry, <span class="font-semibold">you'll connect with an
                                agent no matter what option you choose. 😍</span></p>
                    </div>
                    <div class="mb-2">
                        <p class="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">To get started, <span
                                class="font-semibold">choose
                                the service you need assistance with.</span> 🙏 As the leader in circular fashion in
                            SEA, we offer
                            more than just Rental Memberships, and I want to ensure you receive the best support. 🙂</p>
                    </div>
                </div>
                <div class="p-4 border-t flex">
                    <input ref="userInput" type="text" placeholder="Type a message"
                        class="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <button ref="sendButton"
                        class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300">Send</button>
                </div>
            </div>
        </div>
    </transition>
</template>


<style>
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
    opacity: 1;
    transform: translateY(0);
}
</style>
