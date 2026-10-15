import { afterEach, describe, expect, test, vi } from "vitest";
import { collection, connect , client , exit} from "./database.ts";

describe("database functions", () => {

    afterEach(() => {
        vi.clearAllMocks();
    });

    test("seedDatabase performs correct operations", async () => {
        vi.spyOn(client, "connect").mockResolvedValue({} as any);
        vi.spyOn(collection, "deleteMany").mockResolvedValue({} as any);
        vi.spyOn(collection, "dropIndex").mockResolvedValue({} as any);
        vi.spyOn(collection, "createIndex").mockResolvedValue({} as any);
        vi.spyOn(collection, "insertMany").mockResolvedValue({} as any);
        await connect(); 

        expect(client.connect).toHaveBeenCalled();
        expect(collection.deleteMany).toHaveBeenCalledWith({});
        expect(collection.dropIndex).toHaveBeenCalledWith("*");
        expect(collection.createIndex).toHaveBeenCalledWith({
            breed: "text", name: "text", type: "text"
        });
        expect(collection.insertMany).toHaveBeenCalledWith(expect.any(Array));
    });


    test("exit closes connection and exits the application", async() => {
        vi.spyOn(process, "exit").mockImplementation((() => {}) as any);
        vi.spyOn(client, "close").mockResolvedValue({} as any);

        await exit();

        expect(client.close).toHaveBeenCalled();
        expect(process.exit).toHaveBeenCalledWith(0);
    });
});