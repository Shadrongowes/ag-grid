// Type definitions for ag-grid v10.0.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
export declare class LoggerFactory {
    private logging;
    private setBeans(gridOptionsWrapper);
    create(name: string): Logger;
    isLogging(): boolean;
}
export declare class Logger {
    private isLoggingFunc;
    private name;
    constructor(name: string, isLoggingFunc: () => boolean);
    isLogging(): boolean;
    log(message: string): void;
}
