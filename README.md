# try-catch-decorator

A TypeScript decorator to wrap methods with a try-catch block.

## Installation

You can install the package via npm:

```bash
npm install try-catch-decorator
```

### Usage Example

Consider a scenario where you have an async method `fetchData` within a class `DataFetcher`, which fetches data from an external API using `await`. You want to ensure any errors during this asynchronous operation are handled gracefully.

```typescript
import { tryCatch } from 'try-catch-decorator';

class DataFetcher {
    @tryCatch
    async fetchData() {
        // Fetch data from an API
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        // Process the data
        return data;
    }
}
```
