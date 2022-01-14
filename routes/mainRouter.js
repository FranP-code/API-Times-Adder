import express from "express";

const router = express.Router()

router.get('/', (req, res) => {

    res.status(405).json({
        "message": "Please, use the method POST for comunicate with this API."
    })
})

router.post('/', (req, res) => {

    const data = req.body.data
    console.log(data)

    const comunicateErrors = (message) => {

        res.status(400).json({

            "message": `${message}. Please check it and try it again.`
        })
    }

    if (!Array.isArray(data)) {

        comunicateErrors(`Array of times don't sended, you sended a ${typeof(data)}`)
        return
    }

    if (data.length === 0) {

        comunicateErrors(`Array of times are empty`)
        return
    }

    if (data.length >= 200) {

        comunicateErrors(`You sended ${data.length} times, but 200 are the limit`)
        return
    }

    let globalSeconds = 0

    data.forEach(time => {

        const separatedTime = time.split(':')

        //Check if every string in the array are a number
        separatedTime.forEach(str => {

            if (isNaN(str)) {

                comunicateErrors(`The value Nº ${separatedTime.indexOf(str) + 1} in the array Nº ${data.indexOf(time) + 1} are not valid`)
            }
        })

        const quantityColons = separatedTime.length - 1 //https://www.techiedelight.com/count-occurrences-character-string-javascript/

        //Initialize variables for numbers
        let minutes = 0
        let seconds = 0
        let hours = 0

        switch (quantityColons) {

            case 0:
                minutes = parseInt(separatedTime)

                globalSeconds += minutes * 60

                break;

            case 1:
                minutes = parseInt(separatedTime[0])
                seconds = parseInt(separatedTime[1])

                globalSeconds += minutes * 60
                globalSeconds += seconds

                break;

            case 2:
                hours = parseInt(separatedTime[0])
                minutes = parseInt(separatedTime[1])
                seconds = parseInt(separatedTime[2])

                globalSeconds += hours * 60 * 60
                globalSeconds += minutes * 60
                globalSeconds += seconds

                break;

            default:

                comunicateErrors(`Sended ${quantityColons} colons in your time Nº ${data.indexOf(time) + 1}`)
                break;
        }
    });

    const totalSeconds = globalSeconds

    let globalHours = 0
    let globalMinutes = 0

    //Transform seconds to minutes and hours
    while (globalSeconds > 60) {

        globalMinutes += 1

        if (globalMinutes === 60) {

            globalHours += 1
            globalMinutes -= 60
        }

        globalSeconds -= 60
    }


    res.json({
        sendedData: data,
        time: {
            totalSeconds,
            'standarTime': `${globalHours}:${globalMinutes}:${globalSeconds}`,
            'arrayTime': [globalHours, globalMinutes, globalSeconds]
        }
    })
})

export default router