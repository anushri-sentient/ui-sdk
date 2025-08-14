#!/bin/bash

echo "🎨 Modular UI Component Generator Demo"
echo "======================================"

# Check if Python is available
if ! command -v python3 &> /dev/null; then
    echo "❌ Error: Python 3 is not installed or not in PATH"
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "components-modular.html" ]; then
    echo "❌ Error: Please run this script from the ui_component_demo directory"
    exit 1
fi

# Run the modular demo
echo "🚀 Starting Modular Components Demo..."
echo "📱 The demo will open in your browser at http://localhost:8000"
echo "🛑 Press Ctrl+C to stop the server"
echo "----------------------------------------"

python3 run_modular_demo.py 