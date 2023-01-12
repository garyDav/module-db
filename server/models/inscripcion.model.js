import mongoose from 'mongoose'

const { Schema, model } = mongoose

const inscripcionSchema = new Schema(
  {
    steps: [String],
    // Form 1
    nombre_unidad_educativa: {
      type: String,
      uppercase: true,
      trim: true,
      required: true,
    },
    dependencia_unidad_educativa: {
      type: String,
      uppercase: true,
      trim: true,
      required: true,
    },
    distrito_unidad_educativa: {
      type: String,
      uppercase: true,
      trim: true,
      required: true,
    },
    sie_unidad_educativa: {
      type: String,
      uppercase: true,
      trim: true,
      required: true,
    },
    colegio: {
      type: String,
      uppercase: true,
      trim: true,
      required: true,
    },
    curso: {
      type: String,
      uppercase: true,
      trim: true,
      required: true,
    },
    gestion: {
      type: [Number],
      required: true,
    },

    // Form 2
    pais: {
      type: String,
      uppercase: true,
      trim: true,
    },
    departamento: {
      type: String,
      uppercase: true,
      trim: true,
    },
    provincia: {
      type: String,
      uppercase: true,
      trim: true,
    },
    localidad: {
      type: String,
      uppercase: true,
      trim: true,
    },
    oficialia: {
      type: String,
      uppercase: true,
      trim: true,
    },
    libro: {
      type: String,
      uppercase: true,
      trim: true,
    },
    partida: {
      type: String,
      uppercase: true,
      trim: true,
    },
    folio: {
      type: String,
      uppercase: true,
      trim: true,
    },
    fecha_nacimiento: {
      type: Date,
    },
    discapacidad: {
      type: Boolean,
    },
    registro_discapacidad: {
      type: String,
      uppercase: true,
      trim: true,
    },
    tipo_discapacidad: {
      type: String,
      uppercase: true,
      trim: true,
    },
    grado_discapacidad: {
      type: String,
      uppercase: true,
      trim: true,
    },
    direccion_actual_departamento: {
      type: String,
      uppercase: true,
      trim: true,
    },
    direccion_actual_provincia: {
      type: String,
      uppercase: true,
      trim: true,
    },
    direccion_actual_municipio: {
      type: String,
      uppercase: true,
      trim: true,
    },
    direccion_actual_localidad: {
      type: String,
      uppercase: true,
      trim: true,
    },
    direccion_actual_zona_villa: {
      type: String,
      uppercase: true,
      trim: true,
    },
    direccion_actual_avenida_calle: {
      type: String,
      uppercase: true,
      trim: true,
    },
    direccion_actual_num_vivienda: {
      type: String,
      uppercase: true,
      trim: true,
    },
    telefono: {
      type: Number,
    },
    celular: {
      type: Number,
    },

    // Form 3
    idioma_natal: {
      type: String,
      uppercase: true,
      trim: true,
    },
    idioma_hablado01: {
      type: String,
      uppercase: true,
      trim: true,
    },
    idioma_hablado02: {
      type: String,
      uppercase: true,
      trim: true,
    },
    idioma_hablado03: {
      type: String,
      uppercase: true,
      trim: true,
    },
    nacion_pueblo_originario: {
      type: String,
      uppercase: true,
      trim: true,
    },
    salud_centro_existe: {
      type: Boolean,
    },
    salud_centro01: {
      type: Boolean,
    },
    salud_centro02: {
      type: Boolean,
    },
    salud_centro03: {
      type: Boolean,
    },
    salud_centro04: {
      type: Boolean,
    },
    salud_centro05: {
      type: Boolean,
    },
    salud_centro06: {
      type: Boolean,
    },
    salud_atencion: {
      type: String,
      uppercase: true,
      trim: true,
    },
    salud_seguro: {
      type: Boolean,
    },
    servicio_agua: {
      type: Boolean,
    },
    servicio_baño: {
      type: Boolean,
    },
    servicio_alcantarillado: {
      type: Boolean,
    },
    servicio_electricidad: {
      type: Boolean,
    },
    servicio_basura: {
      type: Boolean,
    },
    servicio_vivienda: {
      type: String,
      uppercase: true,
      trim: true,
    },
    servicio_internet01: {
      type: Boolean,
    },
    servicio_internet02: {
      type: Boolean,
    },
    servicio_internet03: {
      type: Boolean,
    },
    servicio_internet04: {
      type: Boolean,
    },
    servicio_internet05: {
      type: Boolean,
    },
    servicio_frecuencia_internet: {
      type: String,
      uppercase: true,
      trim: true,
    },

    // Form 4
    trabajo_gestion: {
      type: Boolean,
    },
    trabajo_enero: {
      type: Boolean,
    },
    trabajo_febrero: {
      type: Boolean,
    },
    trabajo_marzo: {
      type: Boolean,
    },
    trabajo_abril: {
      type: Boolean,
    },
    trabajo_mayo: {
      type: Boolean,
    },
    trabajo_junio: {
      type: Boolean,
    },
    trabajo_julio: {
      type: Boolean,
    },
    trabajo_agosto: {
      type: Boolean,
    },
    trabajo_septiembre: {
      type: Boolean,
    },
    trabajo_octubre: {
      type: Boolean,
    },
    trabajo_noviembre: {
      type: Boolean,
    },
    trabajo_diciembre: {
      type: Boolean,
    },
    trabajo_actividad: {
      type: String,
      uppercase: true,
      trim: true,
    },
    trabajo_otro: {
      type: String,
      uppercase: true,
      trim: true,
    },
    trabajo_turno01: {
      type: Boolean,
    },
    trabajo_turno02: {
      type: Boolean,
    },
    trabajo_turno03: {
      type: Boolean,
    },
    trabajo_frecuencia: {
      type: String,
      uppercase: true,
      trim: true,
    },
    trabajo_tipo_pago: {
      type: String,
      uppercase: true,
      trim: true,
    },
    trabajo_pago: {
      type: Boolean,
    },
    transporte: {
      type: String,
      uppercase: true,
      trim: true,
    },
    transporte_otro: {
      type: String,
      uppercase: true,
      trim: true,
    },
    transporte_tiempo: {
      type: String,
      uppercase: true,
      trim: true,
    },
    abandono_gestion: {
      type: Boolean,
    },
    abandono_razon01: {
      type: Boolean,
    },
    abandono_razon02: {
      type: Boolean,
    },
    abandono_razon03: {
      type: Boolean,
    },
    abandono_razon04: {
      type: Boolean,
    },
    abandono_razon05: {
      type: Boolean,
    },
    abandono_razon06: {
      type: Boolean,
    },
    abandono_razon07: {
      type: Boolean,
    },
    abandono_razon08: {
      type: Boolean,
    },
    abandono_razon09: {
      type: Boolean,
    },
    abandono_razon10: {
      type: Boolean,
    },
    abandono_razon11: {
      type: Boolean,
    },
    abandono_razon12: {
      type: Boolean,
    },
    abandono_razonOtro: {
      type: String,
      uppercase: true,
      trim: true,
    },

    // Form 5
    vive_habitualmente: {
      type: String,
      uppercase: true,
      trim: true,
    },

    // Form 6
    padre_carnet: {
      type: Number,
    },
    padre_complemento: {
      type: String,
      uppercase: true,
      trim: true,
    },
    padre_extension: {
      type: String,
      uppercase: true,
      trim: true,
    },
    padre_paterno: {
      type: String,
      uppercase: true,
      trim: true,
    },
    padre_materno: {
      type: String,
      uppercase: true,
      trim: true,
    },
    padre_nombre: {
      type: String,
      uppercase: true,
      trim: true,
    },
    padre_idioma: {
      type: String,
      uppercase: true,
      trim: true,
    },
    padre_grado: {
      type: String,
      uppercase: true,
      trim: true,
    },
    padre_ocupacion: {
      type: String,
      uppercase: true,
      trim: true,
    },
    padre_lugar_trabajo: {
      type: String,
      uppercase: true,
      trim: true,
    },
    padre_telefono: {
      type: Number,
    },
    padre_celular: {
      type: Number,
    },
    padre_fecha_nacimiento: {
      type: Date,
    },
    madre_carnet: {
      type: Number,
    },
    madre_complemento: {
      type: String,
      uppercase: true,
      trim: true,
    },
    madre_extension: {
      type: String,
      uppercase: true,
      trim: true,
    },
    madre_paterno: {
      type: String,
      uppercase: true,
      trim: true,
    },
    madre_materno: {
      type: String,
      uppercase: true,
      trim: true,
    },
    madre_nombre: {
      type: String,
      uppercase: true,
      trim: true,
    },
    madre_idioma: {
      type: String,
      uppercase: true,
      trim: true,
    },
    madre_grado: {
      type: String,
      uppercase: true,
      trim: true,
    },
    madre_ocupacion: {
      type: String,
      uppercase: true,
      trim: true,
    },
    madre_lugar_trabajo: {
      type: String,
      uppercase: true,
      trim: true,
    },
    madre_telefono: {
      type: Number,
    },
    madre_celular: {
      type: Number,
    },
    madre_fecha_nacimiento: {
      type: Date,
    },
    tutor_carnet: {
      type: Number,
    },
    tutor_complemento: {
      type: String,
      uppercase: true,
      trim: true,
    },
    tutor_extension: {
      type: String,
      uppercase: true,
      trim: true,
    },
    tutor_paterno: {
      type: String,
      uppercase: true,
      trim: true,
    },
    tutor_materno: {
      type: String,
      uppercase: true,
      trim: true,
    },
    tutor_nombre: {
      type: String,
      uppercase: true,
      trim: true,
    },
    tutor_idioma: {
      type: String,
      uppercase: true,
      trim: true,
    },
    tutor_grado: {
      type: String,
      uppercase: true,
      trim: true,
    },
    tutor_ocupacion: {
      type: String,
      uppercase: true,
      trim: true,
    },
    tutor_lugar_trabajo: {
      type: String,
      uppercase: true,
      trim: true,
    },
    tutor_telefono: {
      type: Number,
    },
    tutor_celular: {
      type: Number,
    },
    tutor_fecha_nacimiento: {
      type: Date,
    },

    // Form 7
    contrato_firma: {
      type: String,
      uppercase: true,
      trim: true,
    },
    contrato_nit: {
      type: String,
      uppercase: true,
      trim: true,
    },
    contrato_nombre: {
      type: String,
      uppercase: true,
      trim: true,
    },
    contrato_correo: {
      type: String,
      uppercase: true,
      trim: true,
    },
    pandemia_vacunas: {
      type: String,
      uppercase: true,
      trim: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      unique: true,
      required: true,
    },
  },
  {
    versionKey: false,
  }
)

export default model('Inscripcion', inscripcionSchema)
