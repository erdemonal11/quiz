import{
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_SIZE,
  CHANGE_TYPE,
  CHANGE_SCORE
} from "./action"

export const handleCategoryChange = (payload) => ({
    type: CHANGE_CATEGORY,
    payload,
})
export const handleDifficultyChange = (payload) => ({
    type: CHANGE_DIFFICULTY,
    payload,
})
export const handleSizeChange = (payload)=> ({
    type: CHANGE_SIZE,
    payload,
})
export const handleTypeChange = (payload) => ({
    type: CHANGE_TYPE,
    payload,
})
export const handleScoreChange = (payload) => ({
    type: CHANGE_SCORE,
    payload,
})