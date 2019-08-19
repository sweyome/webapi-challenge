const express = require("express");
const router = express.Router();
const projectModel = require("../data/helpers/projectModel");
router.use(express.json());
module.exports = router;


//! *** Project Model Routing *************

// *** get all projects **********
router.get("/", (req, res) => {
    projectModel.get()
        //! When successful
        .then(projects => {
            res.status(200).json(projects);
        })
        //! Catch an error
        .catch(err => {
            console.log("error", err);
            res
                .status(500)
                .json({ error: "The project information could not be retrieved"});
        });
});

//! ---- get project by id 

router.get("/:id", (req, res) => {
    projectModel.get(req.params.id)
        //! When successful
        .then(projects => {
            res.status(200).json(projects);
        })
        //! Catch an error
        .catch(err => {
            console.log("error", err);
            res
                .status(500)
                .json({ error: "The project information could not be retrieved"});
        });
});

// ! insert (create) a project ----------------

router.post("/", (req, res) => {
    if (req.body.name.length < 129 && req.body.description) {
        projectModel.insert(req.body)
            .then(projects => {
                //! return newly created resource
                res.status(200).json(projects);
            })
            //! catch error
            .catch( err => {
                console.log("error", err);
                res
                    .status(500)
                    .json({message: "The project information could not be posted"})
            })
    } else {
        res
            .status(500)
            .json({message: "Could not create post. Name must be under 128 characters. Description required"})
    }
    
})

//! ---- update an existing project by id ----------------

router.put("/:id", (req, res) => {
    
    const { id } = req.params;
    const { name, description, completed } = req.body;
    //! update project with id, and body
    projectModel
        .update(id, {name, description, completed})
        .then(isUpdated => {
            //** * Throw error if project didn't update
            if(!isUpdated) {
                res.status(400).json({error: `The post with id ${id} could not be updated`})
            } else { 
                //**  upon success return updated project
                res.status(200).json(isUpdated)
            }
        })
})

//!  delete a project by id 

router.delete("/:id", (req, res) => {
    //! remove function in db by using id 
    const { id } = req.params;
    projectModel.remove(id)
        .then(projects => {
            //**  */return success code with number of records deleted
            res.status(200).json(projects);
        })
        .catch(err => {
            console.log("error", err);
            res.status(500).json({message: "The project could not be deleted."});
        });
});