const NotFound = () => {
    return <h1>Erreur 404 : Page non trouvée</h1>;
};

<Route path="*" element={<NotFound />} />
