   
        .tool {
            width: 40px;
            height: 40px;
            margin-bottom: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        
        .tool:hover {
            background-color: #f0f0f0;
        }
        
        .tool.active {
            background-color: #e6f7ff;
            border: 1px solid #91d5ff;
        }
        
        .canvas-container {
            flex: 1;
            overflow: hidden;
            position: relative;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin: 10px;
            border-radius: 4px;
        }
        
        canvas {
            position: absolute;
            top: 0;
            left: 0;
        }
        
        .color-picker {
            position: absolute;
            bottom: 20px;
            left: 80px;
            display: flex;
            background-color: white;
            padding: 10px;
            border-radius: 30px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .color {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin: 0 5px;
            cursor: pointer;
            border: 2px solid transparent;
        }
        
        .color.active {
            border-color: #333;
            transform: scale(1.1);
        }
        
        .settings-panel {
            position: absolute;
            bottom: 20px;
            right: 20px;
            background-color: white;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .setting {
            margin-bottom: 10px;
        }
        
        .setting label {
            display: block;
            margin-bottom: 5px;
            font-size: 0.9rem;
            color: #555;
        }
        
        .setting input {
            width: 100%;
        }
        
        .action-buttons {
            display: flex;
            gap: 10px;
        }
        
        button {
            padding: 8px 16px;
            background-color: #1890ff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.9rem;
            transition: background-color 0.2s;
        }
        
        button:hover {
            background-color: #40a9ff;
        }
        
        button.secondary {
            background-color: #f5f5f5;
            color: #333;
            border: 1px solid #d9d9d9;
        }
        
