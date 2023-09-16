import tasksSlice, { addTask, setTaskStatus } from "./tasksSlice"

describe("task slice", () => {

    test("add task", async () => {
        expect(tasksSlice({tasks: [], tasksType: "all"}, addTask("задача"))).toEqual({tasks: [{title: "задача", status: false}], tasksType: "all"})
    })

    test("add empty task", async () => {
        expect(tasksSlice({tasks: [], tasksType: "all"}, addTask(""))).toEqual({tasks: [], tasksType: "all"})
    })

    test("set task status true", async () => {
        expect(tasksSlice({tasks: [{title: "задача", status: false}], tasksType: "all"}, setTaskStatus(0))).toEqual({tasks: [{title: "задача", status: true}], tasksType: "all"})
    })

    test("set task status false", async () => {
        expect(tasksSlice({tasks: [{title: "задача", status: true}], tasksType: "all"}, setTaskStatus(0))).toEqual({tasks: [{title: "задача", status: false}], tasksType: "all"})
    })
})