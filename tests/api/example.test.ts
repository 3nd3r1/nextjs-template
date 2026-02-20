import { describe, expect, it, vi } from "vitest";

describe("API example", () => {
    it("should mock a fetch request", async () => {
        vi.mocked(global.fetch).mockResolvedValueOnce(
            new Response(JSON.stringify({ message: "Hello World" }), {
                status: 200,
            })
        );

        const response = await fetch("/api/hello");
        const data = await response.json();

        expect(data.message).toBe("Hello World");
    });
});
