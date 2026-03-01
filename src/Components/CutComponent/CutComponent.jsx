import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const CutComponent = ({ tiempoAlmuerzo }) => {
    const [dividido, setDividido] = useState(false);



    return (
        <>
            <div>
                <h6>Tiempo de almuerzo {tiempoAlmuerzo}</h6>
            </div>
            {tiempoAlmuerzo === 60 &&
                <Form>
                    <div key={`default-checkbox`} className="mb-3">
                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`dividido-checkbox`}
                            label={`Dos de 30?`}
                            checked={dividido}
                            onChange={(e) => setDividido(e.target.checked)}
                        />
                    </div>
                </Form>
            }
        </>
    )
}

export default CutComponent
