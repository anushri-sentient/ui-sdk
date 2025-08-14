#!/usr/bin/env python3
"""
Demo script for ChatGPT Wrapper
Tests the API functionality and displays sample responses
"""

import streamlit as st
import json
import re
from typing import List, Dict, Any
import random

# Page configuration
st.set_page_config(
    page_title="ChatGPT Wrapper Demo - Explain Like I'm 5",
    page_icon="🧠",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS for beautiful styling
st.markdown("""
<style>
    .main-header {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 2rem;
        border-radius: 15px;
        margin-bottom: 2rem;
        color: white;
        text-align: center;
    }
    
    .chat-container {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border-radius: 15px;
        padding: 1.5rem;
        margin: 1rem 0;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .user-message {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem;
        border-radius: 15px;
        margin: 1rem 0;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    
    .ai-message {
        background: white;
        padding: 1.5rem;
        border-radius: 15px;
        margin: 1rem 0;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        border-left: 4px solid #667eea;
    }
    
    .key-points {
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        color: white;
        padding: 1rem;
        border-radius: 10px;
        margin: 1rem 0;
    }
    
    .code-block {
        background: #1e1e1e;
        color: #d4d4d4;
        padding: 1rem;
        border-radius: 10px;
        font-family: 'Monaco', 'Menlo', monospace;
        margin: 1rem 0;
        overflow-x: auto;
    }
    
    .notification {
        background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
        padding: 1rem;
        border-radius: 10px;
        margin: 1rem 0;
        border-left: 4px solid #667eea;
    }
    
    .stButton > button {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        border-radius: 25px;
        padding: 0.5rem 2rem;
        font-weight: 600;
        transition: all 0.3s ease;
    }
    
    .stButton > button:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
    }
    
    .stTextInput > div > div > input {
        border-radius: 25px;
        border: 2px solid #e0e0e0;
        padding: 0.75rem 1rem;
    }
    
    .stTextInput > div > div > input:focus {
        border-color: #667eea;
        box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
    }
    
    .demo-notice {
        background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
        padding: 1rem;
        border-radius: 10px;
        margin: 1rem 0;
        border-left: 4px solid #ff6b6b;
        text-align: center;
    }
</style>
""", unsafe_allow_html=True)

# Demo responses for different topics
DEMO_RESPONSES = {
    "computer": {
        "title": "💻 How Computers Work",
        "content": """Imagine a computer is like a super-smart toy box that can follow instructions really fast!

**What is a computer?**
A computer is like a magical box that can:
- Remember lots of things (like your brain)
- Do math really fast (like a calculator)
- Show you pictures and videos (like a TV)
- Play games with you (like your favorite toys)

**How does it work?**
Think of it like this:
1. **Input** - You tell it what to do (like typing or clicking)
2. **Processing** - It thinks about what you want (like your brain thinking)
3. **Output** - It shows you the answer (like talking or showing pictures)

**Simple Example:**
When you type "2 + 2", the computer:
1. Sees your numbers
2. Does the math in its "brain"
3. Shows you "4" on the screen

It's like having a very fast friend who's really good at following instructions! 🎮""",
        "has_code": True,
        "code": """# This is how a computer "thinks"
def simple_math():
    number1 = 2
    number2 = 2
    answer = number1 + number2
    print(f"The answer is: {answer}")

# When you run this, it prints: "The answer is: 4"
simple_math()""",
        "language": "python"
    },
    "gravity": {
        "title": "🌍 What is Gravity?",
        "content": """Gravity is like an invisible force that pulls everything toward the Earth - just like a magnet pulls metal!

**What is Gravity?**
Gravity is the force that:
- Keeps your feet on the ground
- Makes things fall down (not up!)
- Keeps the moon around Earth
- Keeps Earth around the sun

**How to understand it:**
Think of Earth like a giant magnet, and everything on it (including you!) is like metal. The Earth's gravity pulls everything toward its center.

**Fun Examples:**
- When you jump, gravity pulls you back down
- When you drop a ball, gravity makes it fall
- Without gravity, you'd float away like a balloon!

**Why don't we fall off Earth?**
Because Earth's gravity is always pulling us toward its center, like a big invisible hand holding us down! 🎈""",
        "has_code": False
    },
    "photosynthesis": {
        "title": "🌱 What is Photosynthesis?",
        "content": """Photosynthesis is how plants make their own food using sunlight - like a magical kitchen that uses sunshine as ingredients!

**What is Photosynthesis?**
It's the process where plants:
- Take sunlight (like solar power)
- Take water from the ground
- Take carbon dioxide from the air
- Make their own food (sugar) and oxygen

**How it works (like a recipe):**
1. **Sunlight** - Plants catch sunlight with their leaves
2. **Water** - Plants drink water through their roots
3. **Air** - Plants breathe in carbon dioxide
4. **Magic** - They mix these together
5. **Food** - They make sugar (their food) and oxygen (what we breathe)

**Why is it important?**
- Plants make oxygen for us to breathe
- Plants make food for themselves and other animals
- Without plants, we wouldn't have air to breathe!

**Simple analogy:**
Think of plants as tiny chefs that use sunlight as their cooking energy! 🌞""",
        "has_code": False
    },
    "quantum": {
        "title": "⚛️ What is Quantum Physics?",
        "content": """Quantum physics is like the weirdest, most amazing magic show in the universe - where things can be in two places at once!

**What is Quantum Physics?**
It's the science of very, very tiny things (smaller than atoms) that behave in strange ways:
- Things can be in two places at the same time
- Particles can "talk" to each other instantly
- You can't know exactly where something is and how fast it's moving

**Think of it like this:**
Imagine you have a magical coin that:
- Can be heads AND tails at the same time
- Only becomes heads OR tails when you look at it
- Can instantly tell another coin far away what to do

**Why is it weird?**
- In our everyday world, things are either here OR there
- In the quantum world, things can be here AND there
- It's like having a superpower that breaks all the normal rules!

**Simple example:**
It's like having a cat that's both sleeping AND awake until you check on it! 🐱""",
        "has_code": False
    },
    "ai": {
        "title": "🤖 What is Artificial Intelligence?",
        "content": """Artificial Intelligence (AI) is like teaching a computer to think and learn like a human brain - but it's really just very smart pattern recognition!

**What is AI?**
AI is computer programs that can:
- Learn from examples (like how you learn from practice)
- Recognize patterns (like knowing a cat is a cat)
- Make decisions (like choosing the best move in a game)
- Talk to you (like ChatGPT!)

**How does it work?**
Think of AI like a very smart student:
1. **Learning** - It looks at thousands of examples
2. **Patterns** - It finds patterns in the examples
3. **Practice** - It practices with more examples
4. **Smart** - It gets better and better at the task

**Types of AI:**
- **Chatbots** - Like talking to a very smart friend
- **Image recognition** - Like having super eyes that can identify anything
- **Game AI** - Like playing against a very smart opponent
- **Recommendations** - Like a friend who knows exactly what you like

**Simple analogy:**
AI is like having a computer that's really good at finding patterns and using them to help you! 🧠""",
        "has_code": True,
        "code": """# Simple AI example - recognizing patterns
def simple_ai_learning():
    # AI learns from examples
    examples = [
        "I love pizza" -> "positive",
        "I hate broccoli" -> "negative", 
        "I enjoy music" -> "positive",
        "I dislike rain" -> "negative"
    ]
    
    # AI finds the pattern: "love/enjoy" = positive, "hate/dislike" = negative
    print("AI learned the pattern!")
    print("Now it can understand new sentences!")

simple_ai_learning()""",
        "language": "python"
    }
}

def generate_ui_card(title: str, content: str, theme: str = "primary") -> str:
    """Generate a beautiful card component"""
    card_html = f"""
    <div style="
        background: white;
        border-radius: 15px;
        padding: 1.5rem;
        margin: 1rem 0;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        border-left: 4px solid #667eea;
        transition: transform 0.3s ease;
    ">
        <h3 style="color: #667eea; margin-bottom: 1rem;">{title}</h3>
        <div style="line-height: 1.6; color: #333;">{content}</div>
    </div>
    """
    return card_html

def generate_key_points(points: List[str]) -> str:
    """Generate key points component"""
    points_html = '<div class="key-points"><h4>🎯 Key Points:</h4><ul>'
    for point in points:
        points_html += f'<li style="margin: 0.5rem 0;">{point}</li>'
    points_html += '</ul></div>'
    return points_html

def generate_code_block(code: str, language: str = "python") -> str:
    """Generate code block component"""
    return f"""
    <div class="code-block">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <span style="color: #888; font-size: 0.9rem; text-transform: uppercase;">{language}</span>
            <button onclick="navigator.clipboard.writeText(`{code.replace('`', '\\`')}`)" 
                    style="background: #333; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 5px; cursor: pointer;">
                Copy
            </button>
        </div>
        <pre style="margin: 0; white-space: pre-wrap;">{code}</pre>
    </div>
    """

def generate_notification(message: str, type: str = "info") -> str:
    """Generate notification component"""
    icons = {
        "info": "ℹ️",
        "success": "✅",
        "warning": "⚠️",
        "error": "❌"
    }
    return f"""
    <div class="notification">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="font-size: 1.2rem;">{icons.get(type, 'ℹ️')}</span>
            <span>{message}</span>
        </div>
    </div>
    """

def get_demo_response(user_message: str) -> Dict[str, Any]:
    """Get a demo response based on the user's message"""
    message_lower = user_message.lower()
    
    # Check for keywords in the message
    if any(word in message_lower for word in ["computer", "computers", "programming", "code"]):
        return DEMO_RESPONSES["computer"]
    elif any(word in message_lower for word in ["gravity", "fall", "earth", "planet"]):
        return DEMO_RESPONSES["gravity"]
    elif any(word in message_lower for word in ["photosynthesis", "plant", "plants", "sunlight", "green"]):
        return DEMO_RESPONSES["photosynthesis"]
    elif any(word in message_lower for word in ["quantum", "physics", "atom", "particle"]):
        return DEMO_RESPONSES["quantum"]
    elif any(word in message_lower for word in ["ai", "artificial intelligence", "machine learning", "robot"]):
        return DEMO_RESPONSES["ai"]
    else:
        # Default response for unknown topics
        return {
            "title": "🧠 General Explanation",
            "content": f"""Great question! Let me explain "{user_message}" in simple terms.

**What is it?**
This is a complex topic that can be broken down into simple parts that are easy to understand.

**Key Points:**
- It's something that affects our daily lives
- It can be explained using simple analogies
- Understanding it helps us make better decisions

**Simple Example:**
Think of it like learning to ride a bike - it seems complicated at first, but once you understand the basics, it becomes much easier!

**Why is it important?**
Understanding this helps us:
- Make better choices
- Explain things to others
- Learn new things faster

Remember: Every complex topic can be explained simply if you break it down into small, understandable pieces! 🎯""",
            "has_code": False
        }

def main():
    # Header
    st.markdown("""
    <div class="main-header">
        <h1>🧠 ChatGPT Wrapper Demo - Explain Like I'm 5</h1>
        <p>Ask me anything, and I'll explain it in simple terms that a 5-year-old would understand!</p>
    </div>
    """, unsafe_allow_html=True)
    
    # Demo notice
    st.markdown("""
    <div class="demo-notice">
        <strong>🎭 This is a DEMO version!</strong><br>
        It uses pre-written responses to show how the app works. 
        For real ChatGPT responses, use the full version with your API key.
    </div>
    """, unsafe_allow_html=True)
    
    # Sidebar for settings
    with st.sidebar:
        st.markdown("### ⚙️ Demo Settings")
        st.markdown("---")
        
        # Theme selector
        theme = st.selectbox(
            "Choose Theme",
            ["Default", "Ocean", "Sunset", "Forest"],
            help="Select your preferred color theme"
        )
        
        # Response style
        response_style = st.selectbox(
            "Response Style",
            ["Simple", "Detailed", "With Examples", "With Analogies"],
            help="Choose how detailed you want the explanation to be"
        )
        
        st.markdown("---")
        st.markdown("### 💡 Demo Topics")
        st.markdown("""
        Try asking about:
        - **Computers** - How do computers work?
        - **Gravity** - What is gravity?
        - **Photosynthesis** - How do plants make food?
        - **Quantum Physics** - What is quantum physics?
        - **AI** - What is artificial intelligence?
        """)
        
        st.markdown("---")
        st.markdown("### 🚀 Get Full Version")
        st.markdown("""
        For real ChatGPT responses:
        1. Get an OpenAI API key
        2. Run: `./start_chatgpt_wrapper.sh`
        3. Add your API key to `.env`
        """)
    
    # Initialize chat history
    if "messages" not in st.session_state:
        st.session_state.messages = []
    
    # Display chat history
    for message in st.session_state.messages:
        with st.chat_message(message["role"]):
            if message["role"] == "user":
                st.markdown(f'<div class="user-message">{message["content"]}</div>', unsafe_allow_html=True)
            else:
                # Display AI response with components
                response_data = message["response_data"]
                
                # Display main card
                st.markdown(generate_ui_card(
                    response_data["title"], 
                    response_data["content"]
                ), unsafe_allow_html=True)
                
                # Display code block if present
                if response_data.get("has_code"):
                    st.markdown(generate_code_block(
                        response_data["code"], 
                        response_data.get("language", "python")
                    ), unsafe_allow_html=True)
    
    # Chat input
    if prompt := st.chat_input("Ask me anything! I'll explain it like you're 5 years old..."):
        # Add user message to chat history
        st.session_state.messages.append({"role": "user", "content": prompt})
        
        # Display user message
        with st.chat_message("user"):
            st.markdown(f'<div class="user-message">{prompt}</div>', unsafe_allow_html=True)
        
        # Display assistant response
        with st.chat_message("assistant"):
            with st.spinner("🤔 Thinking like a 5-year-old..."):
                # Get demo response
                response_data = get_demo_response(prompt)
                
                # Add assistant message to chat history
                st.session_state.messages.append({
                    "role": "assistant", 
                    "content": response_data["content"],
                    "response_data": response_data
                })
                
                # Display main card
                st.markdown(generate_ui_card(
                    response_data["title"], 
                    response_data["content"]
                ), unsafe_allow_html=True)
                
                # Display code block if present
                if response_data.get("has_code"):
                    st.markdown(generate_code_block(
                        response_data["code"], 
                        response_data.get("language", "python")
                    ), unsafe_allow_html=True)
    
    # Clear chat button
    if st.button("🗑️ Clear Chat", help="Clear all chat history"):
        st.session_state.messages = []
        st.rerun()
    
    # Footer
    st.markdown("---")
    st.markdown("""
    <div style="text-align: center; color: #666; padding: 2rem;">
        <p>Made with ❤️ using Streamlit and beautiful GenUI components</p>
        <p>This is a demo version - get the full version for real ChatGPT responses!</p>
    </div>
    """, unsafe_allow_html=True)

if __name__ == "__main__":
        main()
