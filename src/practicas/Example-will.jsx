/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import style from 'styles/Filter.module.css';
import Select from 'components/select/V1';
import Button from 'components/button/V1';
import { selectValues, years } from 'utils/filterUtils';
import clear from 'assets/icons/clear.svg';
import filter from 'assets/icons/filter.svg';

const Filters = ({ filtersSelected, setFiltersSelected, getData }) => {
  const [yearJSON, setYearJSON] = useState([]);
  const [viewportWidth, setViewportWidth] = useState(577);

  const handleWindowResize = () => {
    setViewportWidth(window.innerWidth);
  };

  const clearAllSelects = () => {
    setFiltersSelected((prev) => ({
      ...prev,
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
    const cond1 = ['year', 'election'];
    const cond2 = ['year', 'election', 'position'];
    const cond3 = ['year', 'election', 'position', 'district'];
    const cond4 = ['year', 'election', 'position', 'district', 'provincialSection'];
    const cond5 = ['district', 'provincialSection'];

    let dataPositions,
      dataDistricts,
      dataProvinces,
      dataSeccions = [];

    if (name === 'election') {
      dataPositions =
        yearJSON?.find((e) => e.IdEleccion === value)?.Cargos?.map((e) => ({ value: e.IdCargo, label: e.Cargo })) || [];
    }

    if (name === 'position') {
      dataDistricts =
        yearJSON
          ?.find((e) => e.IdEleccion === filtersSelected.election)
          ?.Cargos.find((e) => e.IdCargo === value)
          ?.Distritos.map((e) => ({ value: e.IdDistrito, label: e.Distrito })) || [];
    }

    if (name === 'district') {
      const dataPronvicialSection =
        yearJSON
          ?.find((e) => e.IdEleccion === filtersSelected.election)
          ?.Cargos.find((e) => Number(e.IdCargo) === Number(filtersSelected.position))
          ?.Distritos.find((e) => e.IdDistrito === value).SeccionesProvinciales || [];

      // validar si existe idsseccionprovincial entonces agrega al arreglo de pronvincias
      const valueFirstProvince = dataPronvicialSection[0]?.IDSeccionProvincial || false;
      if (valueFirstProvince) {
        dataProvinces =
          dataPronvicialSection.map((province) => ({
            label: province.SeccionProvincial,
            value: province.IDSeccionProvincial,
          })) || [];
      } else {
        // si no pasa a recorrer secciones
        const sectionsFound = dataPronvicialSection[0].Secciones.map((section) => ({
          value: section.IdSeccion,
          label: section.Seccion,
        }));

        dataSeccions = sectionsFound[0]?.value ? sectionsFound : [];
      }
    }
   
    if (name === 'provincialSection') {
      dataSeccions =
        yearJSON
          ?.find((e) => e.IdEleccion === filtersSelected.election)
          ?.Cargos.find((e) => Number(e.IdCargo) === Number(filtersSelected.position))
          ?.Distritos.find((e) => e.IdDistrito === filtersSelected.district)
          ?.SeccionesProvinciales?.find((e) => e.IDSeccionProvincial === value)
          ?.Secciones.map((e) => ({ value: e.IdSeccion, label: e.Seccion })) || [];
    }

    setFiltersSelected((prev) => ({
      ...prev,
      year: name === 'year' ? value : prev.year,
      election: name === 'year' ? '' : name === 'election' ? value : prev.election,
      position: cond1.includes(name) ? '' : name === 'position' ? value : prev.position,
      district: cond2.includes(name) ? '' : name === 'district' ? value : prev.district,
      provincialSection: cond3.includes(name) ? '' : name === 'provincialSection' ? value : prev.provincialSection,
      section: cond4.includes(name) ? '' : name === 'section' ? value : prev.section,
      // con los arreglos se verifica el cambio del select antesesor para recorrer
      arrPositions: name === 'year' ? [] : name === 'election' ? dataPositions : prev.arrPositions,
      arrDistricts: cond1.includes(name) ? [] : name === 'position' ? dataDistricts : prev.arrDistricts,
      arrProvincialSections: cond2.includes(name)
        ? []
        : name === 'district'
          ? dataProvinces
          : prev.arrProvincialSections,
      arrSections: cond2.includes(name) ? [] : cond5.includes(name) ? dataSeccions : prev.arrSections,
    }));
  };

  const getSelects = () =>
    selectValues.map(
      ({ name, options, label }) =>
        (name !== 'provincialSection' || filtersSelected?.arrProvincialSections?.length > 0) && (
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
  }, [filtersSelected.year]);

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

export default Filters;
