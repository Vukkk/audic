import Audic from "./src"
import is from "@sindresorhus/is"
import test from "ava"

test("main", (t) => {
	t.true(is.class_(Audic))
})
