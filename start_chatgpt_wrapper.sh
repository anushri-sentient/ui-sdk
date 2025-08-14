#!/bin/bash

# ChatGPT Wrapper Startup Script
echo "🚀 Starting ChatGPT Wrapper - Explain Like I'm 5"

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "🔧 Activating virtual environment..."
source venv/bin/activate

# Install requirements
echo "📥 Installing requirements..."
pip install -r requirements.txt

# Ensure OpenAI is up to date
echo "🔄 Ensuring OpenAI API is up to date..."
pip install --upgrade openai

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "⚠️  No .env file found!"
    echo "📝 Creating .env file template..."
    cat > .env << EOF
# OpenAI API Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Optional: Customize the application
APP_TITLE="ChatGPT Wrapper - Explain Like I'm 5"
APP_ICON="🧠"
EOF
    echo "✅ Created .env file template"
    echo "🔑 Please add your OpenAI API key to the .env file"
    echo "   You can get one from: https://platform.openai.com/api-keys"
fi

# Check if API key is set
if grep -q "your_openai_api_key_here" .env; then
    echo "⚠️  Please set your OpenAI API key in the .env file"
    echo "   Edit the .env file and replace 'your_openai_api_key_here' with your actual API key"
    exit 1
fi

# Start the Streamlit application
echo "🌟 Starting Streamlit application..."
echo "🌐 The app will open in your browser at: http://localhost:8501"
echo "📱 You can also access it on your phone at: http://your-computer-ip:8501"
echo ""
echo "💡 Tips:"
echo "   - Ask complex questions and get simple explanations"
echo "   - Perfect for explaining things to kids"
echo "   - Use analogies and examples"
echo ""
echo "🛑 Press Ctrl+C to stop the application"
echo ""

streamlit run chatgpt_wrapper.py --server.port 8501 --server.address 0.0.0.0
