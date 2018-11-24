// API-REST de pruebas en typescript en vez de javascript
import { Router, Request, Response  } from 'express';

const router = Router();

router.get('/mensajes',(req: Request, res: Response) => {

    res.json({
        ok: true,
        mensaje: 'Resultado ok'
    });

});

router.post('/mensajes',(req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;

    res.json({
        ok: true,
        mensaje: cuerpo,
        de: de
    });

});

router.post('/mensajes/:id',(req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;
    const id     = req.params.id;

    res.json({
        ok: true,
        mensaje: cuerpo,
        de: de,
        id
    });

});


export default router;