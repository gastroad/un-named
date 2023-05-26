import { createProxyMiddleware } from "http-proxy-middleware"

export async function getPortfolioData() {
    const res = await fetch('/api/portfolio');
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

// export async function getServerPortfolioData() {
//     const res = await fetch('http:localhost:3000/api/portfolio');
//     if (!res.ok) {
//         throw new Error('Failed to fetch data');
//     }

//     return res.json();
// }