import {act, renderHook} from "@testing-library/react-hooks"
import "@testing-library/jest-dom/extend-expect";
import {useForm} from "./hook"


test("should change keyword", async()=>{
  const {result} = renderHook(() => useForm())

  act(() => {
    result.current.updateKeyword("batman")
  })

  expect(result.current.keyword).toBe("batman")
})


test("Should use the initials values", async()=>{
  const {result} = renderHook(() => useForm({
    initialRating: "r",
    initialKeyword: "Matrix"
  }))

  expect(result.current.keyword).toBe("Matrix")
  expect(result.current.rating).toBe("r")
})
