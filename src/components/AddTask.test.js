import { screen, render, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../redux/store"
import AddTask from "./AddTask"
import Tasks from "./Tasks"
import userEvent from "@testing-library/user-event"

describe("add task component", () => {

    test("add task on page", async () => {

        render (
            <Provider store={store}>
                <AddTask />
                <Tasks />
            </Provider>
        )

        const input = screen.getByTestId("add-task-input")
        const button = screen.getByTestId("add-task-button")
        userEvent.paste(input, "задача123")
        expect(input.value).toBe("задача123")
        
        fireEvent.click(button)
        const task = screen.queryAllByText("задача123")
        expect(task).not.toEqual([])
        screen.debug()
    })
})