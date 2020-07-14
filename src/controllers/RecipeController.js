import RecipeModel from "../models/Recipe"

class RecipeController{
    post(req, res) {

        const data = req.body;

        console.log(data);

        const recipe = new RecipeModel({
            title: data.title,
            description: data.description
        })

        recipe.save().then(() => {
            res.send({status: `${recipe} added`})
        })
    }

    get(req, res) {
        RecipeModel.find().then((err, recipes) => {
            if (err) {
                return res.send(err);
            }

            res.json(recipes)
        })
    }

    delete(req, res) {
        RecipeModel.deleteOne({
            _id: req.params.id
        }).then((recipe, err) => {
            if (err) {
                res.json({status: err});
            } else {
                if (recipe.deletedCount) {
                    res.json({status: `${req.params.id} deleted`})
                } else {
                    res.json({status: `${req.params.id} is not found`})
                }
            }
        });
    }
}

export default RecipeController;