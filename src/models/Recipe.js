import mongoose, {Schema} from 'mongoose';

const RecipeSchema = new Schema(
    {
        title: String,
        description: String,
        parent_id: String
    },
    {
        timestamps: true
    }
);

const Recipe = mongoose.model('Recipe', RecipeSchema);

export default Recipe;