#!/usr/bin/env python3
"""
Simple HTTP server to run the modular components demo
"""

import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

def main():
    # Change to the ui_component_demo directory
    os.chdir(Path(__file__).parent)
    
    PORT = 8000
    
    # Create a simple HTTP server
    Handler = http.server.SimpleHTTPRequestHandler
    
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Server started at http://localhost:{PORT}")
        print("Serving modular components demo...")
        print("Press Ctrl+C to stop the server")
        
        # Open the browser
        webbrowser.open(f'http://localhost:{PORT}/components-modular.html')
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server...")
            httpd.shutdown()

if __name__ == "__main__":
    main()
