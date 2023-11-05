import Container from "@/app/components/Container";
import FormTopic from "@/app/components/FormTopic";

export default function editTopic({ params }) {
    return (
        <Container>
            <FormTopic id={params.id} />
        </Container>
    );
}
