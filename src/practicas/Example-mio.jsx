const Filters = ({ filtersSelected, setFiltersSelected, getData }) => {
  const [yearJSON, setYearJSON] = useState([]);
  const [viewportWidth, setViewportWidth] = useState(577);

  const handleWindowResize = () => {
    setViewportWidth(window.innerWidth);
  };

  const clearAllSelects = () =>{
    setFiltersSelected(({
      year: '',
      election: '',
      district: '',
      provincialSection: '',
      section: '',
      arrYears: years || [],
      arrElections: [],
      arrPositions: [],
      arrDistricts: [],
      arrProvincialSections: [],
      arrSections: [],
    }));
  };

  const onChangeSelect = (option, name) => {
    const { value } = option;
    setFiltersSelected((prev) => ({ ...prev, [name]: value }));

    if (name === 'year') {
      setFiltersSelected(prev=> ({ ...prev }));
    }

    if (name === 'election') {
      const dataPositions = yearJSON
        ?.find((e) => e.IdEleccion === value)
        ?.Cargos?.map((e) => ({ value: e.IdCargo, label: e.Cargo }));

      setFiltersSelected((prev) => ({ ...prev, arrPositions: dataPositions || [] }));
    }

    if (name === 'position') {
      const dataDstricts = yearJSON
        ?.find((e) => e.IdEleccion === filtersSelected.election)
        ?.Cargos.find((e) => e.IdCargo === value)
        ?.Distritos.map((e) => ({ value: e.IdDistrito, label: e.Distrito }));

      setFiltersSelected((prev) => ({ ...prev,arrDistricts: dataDstricts || [] }));
    }

    if (name === 'district') {
      let dataProvicialSection = yearJSON
        ?.find((e) => e.IdEleccion === filtersSelected.election)
        ?.Cargos.find((e) => Number(e.IdCargo) === Number(filtersSelected.position))
        ?.Distritos.find((e) => e.IdDistrito === value).SeccionesProvinciales;

      if (dataProvicialSection && !dataProvicialSection[0].IDSeccionProvincial) {
        dataProvicialSection = dataProvicialSection[0].Secciones.map((section) => ({
          value: section.IdSeccion,
          label: section.Seccion,
        }));

        // validación porque para presidente no hay secciones
        if (dataProvicialSection[0].value) {
          setFiltersSelected((prev) => ({
            ...prev,
            provincialSection: '',
            section: '',
            arrProvincialSections: [],
            arrSections: dataProvicialSection || [],
          }));
        } else {
          setFiltersSelected((prev) => ({
            ...prev,
            provincialSection: '',
            section: '',
            arrProvincialSections: [],
            arrSections: [],
          }));
        }

      } else {
        setFiltersSelected((prev) => ({
          ...prev,
          provincialSection: '',
          section: '',
          arrProvincialSections: dataProvicialSection.map((province) => ({
              label: province.SeccionProvincial,
              value: province.IDSeccionProvincial,
            })) || [],
          arrSections: [],
        }));
      }
    }

    if (name === 'provincialSection') {
      let dataFound = yearJSON
        ?.find((e) => e.IdEleccion === filtersSelected.election)
        ?.Cargos.find((e) => Number(e.IdCargo) === Number(filtersSelected.position))
        ?.Distritos.find((e) => e.IdDistrito === filtersSelected.district)
        ?.SeccionesProvinciales?.find((e) => e.IDSeccionProvincial === value)
        ?.Secciones.map((e) => ({ value: e.IdSeccion, label: e.Seccion }));

      setFiltersSelected((prev) => ({ ...prev, provincialSection: value, arrSections: dataFound || [] }));
    }

    if (name === 'section') {
      setFiltersSelected((prev) => ({ ...prev, section: value }));
    }
  };

  const getSelects = () =>
    selectValues.map(
      ({ name, options, label }) =>
        (name !== 'provincialSection' || filtersSelected.arrProvincialSections.length > 0) && (
          <Select
            name={name}
            onChange={onChangeSelect}
            options={filtersSelected[options]}
            placeholder={viewportWidth < 577 ? '--' : label}
            label={viewportWidth < 577 ? label : ''}
            value={filtersSelected[name]}
            key={name}
          />
        ),
    );

  useEffect(() => {
    if (filtersSelected?.year) {
      import(`utils/elections/${filtersSelected.year}`)
        .then((module) => {
          console.log(module?.default);
          setYearJSON(module?.default);
        })
        .catch((error) => {
          console.log('error');
        });
    }
  }, [filtersSelected?.year]);

  useEffect(() => {
    const setData = () => {
      const dataElections = yearJSON?.map((e) => ({ value: e.IdEleccion, label: e.Elecciones }));
      setFiltersSelected((prev) => ({
        ...prev,
        arrElections: dataElections || [],
      }));
    };
    if (yearJSON.length > 0) setData();
  }, [yearJSON]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setViewportWidth(window.innerWidth);
      window.addEventListener('resize', handleWindowResize);

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }
  }, []);

  return (
    <div className={style.filterContainer}>
      {getSelects()}
      <div className={style.filterCtnButtons}>
        {viewportWidth < 577 && <Button name="Limpiar filtros" img={clear} eventClick={clearAllSelects} />}
        <Button name="Aplicar filtros" img={filter} type="active" eventClick={() => getData(filtersSelected)} />
      </div>
    </div>
  );
};

  